import { ThemeProvider } from 'styled-components';

export const mockTheme = {
  colors: {
    background: '#FFFFFF',
    surface: '#F1F1F1',
    primary: '#00ADB5',
    textPrimary: '#212121',
    textSecondary: '#616161',
  },

  button: {
    primary: {
      background: '#00ADB5',
      backgroundHover: '#00868d',
      text: '#FFFFFF',
      border: '2px solid #00ADB5',
      borderFocus: '2px solid #00868d',
    },
    secondary: {
      background: '#FFFFFF',
      backgroundHover: '#e0e0e0',
      text: '#00ADB5',
      border: '2px solid #00ADB5',
      borderFocus: '2px solid #00868d',
    },
  },

  productQuantity: {
    background: '#00ADB5',
    backgroundHover: '#00868d',
    bacgkroundDisabled: '#4b4d4d',
  },

  shadow: '10px 10px 15px rgba(0, 0, 0, 0.3)',
};

export const withThemeProvider = (children) => (
  <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
);
