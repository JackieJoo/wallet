import React, { useState } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { connectorsByName } from '../constants/connectors'
import ModalManager from '../components/ModalManager/ModalManager';
import WalletModal from '../components/WalletModal/WalletModal'
import Web3 from 'web3';

export const WalletModalContext = React.createContext({});

export const WalletProvider = ({ children, chainId = 1, isBSC = true }) => {
    const [isWalletOpen, setIsWalletOpen] = useState(false);

    return (
        <Web3ReactProvider getLibrary={(provider) => provider}>
            <WalletModalContext.Provider value={{ open: isWalletOpen, setOpen: setIsWalletOpen }}>
                {children}
                <ModalManager open={isWalletOpen} close={() => setIsWalletOpen(false)}>
                    <WalletModal isBSC={isBSC} chainId={chainId} />
                </ModalManager>
            </WalletModalContext.Provider>
        </Web3ReactProvider>
    );
}