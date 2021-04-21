import { useEffect, useState, useRef } from 'react'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'

const RPC_URLS = {
    1: 'https://mainnet.infura.io/v3/832efcccfe9c457eb255d893f2eab5b0',
    5: 'https://goerli.infura.io/v3/832efcccfe9c457eb255d893f2eab5b0',
    56: 'https://bsc-dataseed.binance.org/',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
}
const httpProvider = new Web3.providers.HttpProvider(RPC_URLS[5])
const web3NoAccount = new Web3(httpProvider)

export const getWeb3NoAccount = () => {
    return web3NoAccount
}
/**
 * Provides a web3 instance using the provider provided by useWallet
 * with a fallback of an httpProver
 * Recreate web3 instance only if the provider change
 */
export const useWeb3 = () => {
    const { library } = useWeb3React()
    const refEth = useRef(library)
    const [web3, setweb3] = useState(library ? new Web3(library) : getWeb3NoAccount())

    useEffect(() => {
        if (library !== refEth.current) {
            setweb3(library ? new Web3(library) : getWeb3NoAccount())
            refEth.current = library
        }
    }, [library])

    return web3
}

export const useWeb3Account = () => {
    const { account } = useWeb3React()
    return account;
}