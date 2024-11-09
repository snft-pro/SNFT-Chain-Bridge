import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/style/main.scss"
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from './store'
import { Provider } from 'react-redux'
import { WagmiConfig, createConfig, createStorage } from 'wagmi'
import { configureChains } from '@wagmi/core'
import { baseSepolia } from '@wagmi/core/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
export const SNFT = {
    id: Number("12012"),
    name: "SNFT Testnet",
    network: "SNFT",
    iconUrl: "https://i.imgur.com/Q3oIdip.png",
    iconBackground: "#000000",
    nativeCurrency: {
        decimals: 18,
        name: 'SNFT',
        symbol: 'S'
    },
    rpcUrls: {
        default: {
            http: [String("https://rpc.snft.pro")]
        },
    },
    blockExplorers: {
        default: { name: "SNFT Testnet Explorer", url: "https://explorer.snft.pro" }
    },
    testnet: true

}

const { chains, publicClient } = configureChains(
    [baseSepolia, SNFT],
    [
        jsonRpcProvider({
            rpc: chain => ({ http: chain.rpcUrls.default.http[0] })

        })
    ])

export const connectors = [
    new MetaMaskConnector({
        chains,
        options : {
            shimDisconnect: false,
        }
    }),
];

const config = createConfig({
    autoConnect: true,
    connectors,
    storage: createStorage({ storage: window.localStorage }),
    publicClient,
})
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <WagmiConfig config={config}>
        <Provider store={store}>
            <App />
        </Provider>,
    </WagmiConfig>
);
reportWebVitals();
