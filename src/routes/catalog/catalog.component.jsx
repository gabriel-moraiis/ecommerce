import { Routes, Route } from 'react-router-dom';
import Categorie from '../../components/categorie/categorie.component';
import CategoriesPreview from '../../components/categories-preview/categories-preview.component';

function Catalog() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categorieRoute" element={<Categorie />} />
    </Routes>
  );
}

export default Catalog;
