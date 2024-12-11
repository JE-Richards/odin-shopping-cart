import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Card from './components/Card';

import { lightTheme, darkTheme } from './components/styles/theme';
import GlobalStyles from './components/styles/Global.styled';

const temp = {
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  price: 23.99,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Card obj={temp} />
      </>
    </ThemeProvider>
  );
}

export default App;
