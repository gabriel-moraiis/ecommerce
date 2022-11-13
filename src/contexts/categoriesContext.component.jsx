import { createContext, useEffect, useState } from 'react';

import SHOP_DATA from '../utils/SHOP_DATA';

export const CategoriesContext = createContext({
  categories: [],
  setCategories: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(SHOP_DATA);
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider
      value={value}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
