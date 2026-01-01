import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layout/default';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Checkout } from './pages/checkout';
import { Success } from './pages/success';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
