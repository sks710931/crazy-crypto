
import './bootstrap.css';
import { Layout } from './layout/layout';
import { Banner } from './components/banner/banner';
import { Minter } from './components/minter/minter';
import { Giveaway } from './components/giveaway/giveaway';

function App() {
  return (
    <div className="App">
      <Layout>
      <Banner />
      <Minter />
      <Giveaway />
      </Layout>
    </div>
  );
}

export default App;
