import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Categories from './pages/Categories/Categories';
import Checkout from './pages/Checkout/Checkout';

function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default RoutesPage;
