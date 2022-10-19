import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainRouter from './navigation/MainRouter';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout footer={<Footer />} header={<Header />}>
        <MainRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;