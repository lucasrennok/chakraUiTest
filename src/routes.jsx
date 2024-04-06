import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Categories from './pages/Categories/Categories';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/brand-identity-pack/details" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
