import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Collections } from './components/Collections';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Collections />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
