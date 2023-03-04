import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/Home/home.component';
import Catalog from './routes/catalog/catalog.component';
import Checkout from './routes/checkout/checkout.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="cadastro" element={<Authentication />} />
        <Route path="catalogo/*" element={<Catalog />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
