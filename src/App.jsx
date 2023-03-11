import {
  useEffect,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUserDocumentFromAuth, onAuthStateChangedListener, getCategoriesAndDocuments } from './utils/firebaseApp';
import { setCurrentUser } from './store/user/user.action';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/Home/home.component';
import Catalog from './routes/catalog/catalog.component';
import Checkout from './routes/checkout/checkout.component';
import { setCategories } from './store/categories/category.action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
        const categoriesMap = await getCategoriesAndDocuments();
        dispatch(setCategories(categoriesMap));
    };

    getCategoriesMap();
  }, []);

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
