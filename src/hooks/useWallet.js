import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
    WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { setupNetwork } from './useWalletHelpers'
import { connectorsByName } from '../constants/connectors'

const useWallet = (chainId) => {
    const { activate, deactivate } = useWeb3React()
    const onError = (title, msg) => {
        console.log(`WALLET: ${title}`, msg);
    };

    const login = useCallback((connectorID) => {
        const connector = connectorsByName[connectorID]
        if (connector) {
            activate(connector, async (error) => {
                if (error instanceof UnsupportedChainIdError) {
                    const hasSetup = await setupNetwork(chainId)
                    if (hasSetup) {
                        activate(connector)
                    }
                } else {
                    window.localStorage.removeItem(connectorLocalStorageKey)
                    if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
                        onError('Provider Error', 'No provider was found')
                    } else if (
                        error instanceof UserRejectedRequestErrorInjected ||
                        error instanceof UserRejectedRequestErrorWalletConnect
                    ) {
                        if (connector instanceof WalletConnectConnector) {
                            connector.walletConnectProvider = null
                        }
                        onError('Authorization Error', 'Please authorize to access your account')
                    } else {
                        onError(error.name, error.message)
                    }
                }
            })
        } else {
            onError("Can't find connector", 'The connector config is wrong')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { connect: login, disconnect: deactivate }
}

export default useWallet