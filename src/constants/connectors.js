import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'

const POLLING_INTERVAL = 12000
const RPC_URLS = {
    1: 'https://mainnet.infura.io/v3/832efcccfe9c457eb255d893f2eab5b0',
    5: 'https://goerli.infura.io/v3/832efcccfe9c457eb255d893f2eab5b0',
    56: 'https://bsc-dataseed.binance.org/',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 56, 97] })

export const bsc = new BscConnector({
    supportedChainIds: [56, 97] // later on 1 ethereum mainnet and 3 ethereum ropsten will be supported
})

export const walletconnect = new WalletConnectConnector({
    rpc: { 1: RPC_URLS[1] },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: POLLING_INTERVAL
})

export const connectorNames = {
    injected: "INJECTED",
    walletConnect: "WALLET_CONNECT",
    bsc: "BSC"
};

export const connectorsByName = {
    [connectorNames.injected]: injected,
    [connectorNames.bsc]: bsc,
    [connectorNames.walletConnect]: walletconnect
}
