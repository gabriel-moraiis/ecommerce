import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { UserProvider } from './contexts/UserContext/user-context.component';
import GlobalStyle from './styles/globalStyles';
import defaultTheme from './styles/defaultTheme';
import { CategoriesProvider } from './contexts/categoriesContext.component';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <GlobalStyle />
            <App />
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
