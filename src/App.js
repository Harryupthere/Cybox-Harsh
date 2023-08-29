
import {React , useEffect} from 'react';
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import '../src/assets/font/font-awesome.css'
import routes from './pages';
import Page404 from './pages/404';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import {  mainnet, sepolia } from 'wagmi/chains'

const chains = [ mainnet, sepolia]
const projectId = '6b098530af4797b4b0dcb37e0534845a'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

// function App() {
//   return (
//     <>
//       <WagmiConfig config={wagmiConfig}>
//         <HomePage />
//       </WagmiConfig>

//       <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
//     </>
//   )
// }


function App() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        }); 
      }, []);

    return (
        <>
        <WagmiConfig config={wagmiConfig}>

            <Header />

            <Routes>

                {
                    routes.map((data,idx) => (
                        <Route key={idx} path={data.path} element={data.component} exact />
                    ))
                }

                <Route path='*' element={<Page404 />} />
            </Routes>

            <Footer />
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </>
    );
}

export default App;
