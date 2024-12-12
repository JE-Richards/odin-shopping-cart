import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Header from './components/Header';
import router from './components/router';
import { RouterProvider } from 'react-router-dom';

import { lightTheme, darkTheme } from './components/styles/theme';
import GlobalStyles from './components/styles/Global.styled';

import './index.css';

function Main() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <RouterProvider router={router} />
      </>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
