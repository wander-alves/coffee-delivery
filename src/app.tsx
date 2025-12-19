import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import './styles/global.css';
import { ThemeProvider } from 'styled-components';
import { defaulTheme } from './styles/theme/default';

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
