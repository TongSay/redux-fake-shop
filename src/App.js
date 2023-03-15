import Header from './containers/Header';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div>

      <Router>
        <Header />

        <Routes>
        <Route path='/' exact Component={ProductListing} />
        <Route path='/product/:productId' exact Component={ProductDetail} />
        </Routes>
        
        
        
      </Router>
      
      
    </div>
  );
}

export default App;
