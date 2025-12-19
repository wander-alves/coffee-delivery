import 'styled-components';
import type { defaulTheme } from '../styles/theme/default';

type ThemeTypes = typeof defaulTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
