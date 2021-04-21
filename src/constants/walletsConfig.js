import MetamaskIco from "src/assets/Icons/Wallets/metamask.svg";
import TrustWalletIco from "src/assets/Icons/Wallets/trustwallet.svg";
import MathWalletIco from "src/assets/Icons/Wallets/mathwallet.svg";
import TokenpocketIco from "src/assets/Icons/Wallets/tokenpocket.svg";
import WalletConnectIco from "src/assets/Icons/Wallets/walletconnect.svg";
import BinanceWalletIco from "src/assets/Icons/Wallets/binancewallet.svg";
import SafePalIco from "src/assets/Icons/Wallets/safepalwallet.svg";
import { connectorNames } from './connectors';

const wallets = [
    {
        title: "MetaMask",
        image: MetamaskIco,
        connector: connectorNames.injected
    },
    {
        title: "Binance Chain Wallet",
        image: BinanceWalletIco,
        connector: connectorNames.bsc
    },
    {
        title: "Trust Wallet",
        image: TrustWalletIco,
        connector: connectorNames.injected,
    },
    {
        title: "Wallet Connect",
        image: WalletConnectIco,
        connector: connectorNames.walletConnect,
    },
    {
        title: "Math Wallet",
        image: MathWalletIco,
        connector: connectorNames.injected,
    },
    {
        title: "Token Pocket",
        image: TokenpocketIco,
        connector: connectorNames.injected,
    },
    {
        title: "SafePal Wallet",
        image: SafePalIco,
        connector: connectorNames.injected,
    },
];

export default wallets;