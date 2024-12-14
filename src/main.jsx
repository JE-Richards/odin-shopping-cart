import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import fetchData from './api/fetchData';
import { AppContext } from './context/AppContext';
import router from './components/router';
import { RouterProvider } from 'react-router-dom';

import { lightTheme, darkTheme } from './components/styles/theme';
import GlobalStyles from './components/styles/Global.styled';

import './index.css';

function Main() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const { data, error } = await fetchData();

      if (data) {
        setProducts(data);
        setError(null);
      } else {
        setError(error);
      }

      setIsLoading(false);
    };

    loadProducts();
    if (!isLoading) {
      console.log(products);
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <AppContext.Provider
          value={{
            products,
            cart,
            setCart,
            error,
            isLoading,
            setIsLoading,
            isDarkMode,
            setIsDarkMode,
          }}
        >
          <RouterProvider router={router} />
        </AppContext.Provider>
      </>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
