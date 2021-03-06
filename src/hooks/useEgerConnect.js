import { useEffect } from 'react'
import { connectorLocalStorageKey } from '../constants/constants'
import { connectorNames } from '../constants/connectors'
import useWallet from './useWallet'

const _binanceChainListener = async () =>
    new Promise((resolve) =>
        Object.defineProperty(window, 'BinanceChain', {
            get() {
                return this.bsc
            },
            set(bsc) {
                this.bsc = bsc
                resolve()
            },
        }),
    )

export const useEagerConnect = () => {
    const { connect } = useWallet()

    useEffect(() => {
        const connectorId = window.localStorage.getItem(connectorLocalStorageKey);

        if (connectorId) {
            const isConnectorBinanceChain = connectorId === connectorNames.bsc
            const isBinanceChainDefined = Reflect.has(window, 'BinanceChain')

            // Currently BSC extension doesn't always inject in time.
            // We must check to see if it exists, and if not, wait for it before proceeding.
            if (isConnectorBinanceChain && !isBinanceChainDefined) {
                _binanceChainListener().then(() => connect(connectorId))

                return
            }

            connect(connectorId)
        }
    }, [connect])
}