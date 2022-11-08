import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

import defaultTheme from './styles/defaultTheme';

function Layout() {
  return (
    <h1>Layout</h1>
  );
}

function Shop() {
  return (
    <h1>Catalogo</h1>
  );
}

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Layout />} />
          <Route path="cadastro" element={<Authentication />} />
          <Route path="catalogo" element={<Shop />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
