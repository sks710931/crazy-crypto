import "./bootstrap.css";
import { Layout } from "./layout/layout";
import { Banner } from "./components/banner/banner";
import { Minter } from "./components/minter/minter";
import { Giveaway } from "./components/giveaway/giveaway";
import { Web3Provider } from "@ethersproject/providers";
import { useEagerConnect } from "./connector/use-eager-connect";
import { Web3ReactProvider } from "@web3-react/core";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
function App() {
  useEagerConnect();
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Layout>
          <Banner />
          <Minter />
          <Giveaway />
        </Layout>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
