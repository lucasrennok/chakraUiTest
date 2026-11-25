import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Categories from './pages/Categories/Categories';
import Checkout from './pages/Checkout/Checkout';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Categories />} />
    </Routes>
  );
}

function RoutesPage() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default RoutesPage;
