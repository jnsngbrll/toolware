import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Footer } from './components/Footer';
import { ContextProvider } from './context/Context';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
