import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { UserProvider } from './contexts/user-context.component';
import GlobalStyle from './styles/globalStyles';
import defaultTheme from './styles/defaultTheme';
import { CategoriesProvider } from './contexts/categoriesContext.component';
import { CartProvider } from './contexts/cart-context.component';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <CategoriesProvider>
              <GlobalStyle />
              <App />
            </CategoriesProvider>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
