import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layout/default';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Checkout } from './pages/checkout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
