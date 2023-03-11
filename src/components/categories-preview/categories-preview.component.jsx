import { useSelector } from 'react-redux';
import CategoriePreview from '../categorie-preview/categorie-preview.component';
import { Container } from './categories-preview.styles';
import { selectCategories } from '../../store/categories/category.selector';

function CategoriesPreview() {
  const categories = useSelector(selectCategories);

  return (
    <Container>
      {
        Object.keys(categories || []).map((categorie) => (
          <CategoriePreview
            key={categorie}
            title={categorie}
            items={categories[categorie]}
          />
        ))
      }
    </Container>
  );
}

export default CategoriesPreview;
