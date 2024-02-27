import { BrowserRouter as Router } from 'react-router-dom';
import { Collections } from './components/Collections';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Products } from './components/Products';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Collections />
        <Banner />
        <Products />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
