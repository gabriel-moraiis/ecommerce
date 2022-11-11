import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

import defaultTheme from './styles/defaultTheme';
import Home from './routes/Home/home.component';
import Catalog from './routes/catalog/catalog.component';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="cadastro" element={<Authentication />} />
          <Route path="catalogo/*" element={<Catalog />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
