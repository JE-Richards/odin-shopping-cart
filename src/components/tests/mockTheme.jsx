import { ThemeProvider } from 'styled-components';

export const mockTheme = {
  colors: {
    surface: '#f0f0f0',
    textPrimary: '#333333',
    primary: '#007BFF',
  },
  shadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

export const withThemeProvider = (children) => (
  <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
);
