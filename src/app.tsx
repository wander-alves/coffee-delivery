import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import './styles/global.css';
import { ThemeProvider } from 'styled-components';
import { defaulTheme } from './styles/theme/default';
import { CartContextProvider } from './context/cart-context';

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  );
}
