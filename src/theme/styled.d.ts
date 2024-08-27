import 'styled-components';
import { theme } from './Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    typography: typeof theme.typography;
  }
}
