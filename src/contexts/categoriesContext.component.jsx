import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebaseApp';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  const value = { categories };

  useEffect(() => {
    const getCategoriesMap = async () => {
        const categoriesMap = await getCategoriesAndDocuments();
        setCategories(categoriesMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider
      value={value}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
