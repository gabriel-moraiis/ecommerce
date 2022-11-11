import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../components/categories-preview/categories-preview.component';

function Catalog() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* <Route path=':categories' element= /> */}
    </Routes>
  );
}

export default Catalog;
