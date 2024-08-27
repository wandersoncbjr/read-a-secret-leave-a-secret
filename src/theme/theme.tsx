import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import React from 'react';

export const theme = {
  colors: {
    primaryColor: ' #ffc',
    AccentBorder: '#fbc02d',
    shadowLight: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  typography: {
    fonts: {
      secondary: 'Permanent Marker',
    },
    size: {
      small: '1.5rem',
      xLarge: '3rem',
    },
    lineHeight: {
      small: '28px',
      medium: '48px',
      large: '60px',
    },
  },
};

export const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
