import { BrowserRouter as Router } from 'react-router-dom';
import { Collections } from './components/Collections';
import { Header } from './components/Header';
import { Banner } from './components/Banner';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Collections />
        <Banner/>
      </Router>
    </>
  );
}

export default App;
