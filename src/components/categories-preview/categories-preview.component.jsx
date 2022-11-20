import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categoriesContext.component';
import CategoriePreview from '../categorie-preview/categorie-preview.component';
import { Container } from './categories-preview.styles';

function CategoriesPreview() {
    const { categories } = useContext(CategoriesContext);

  return (
    <Container>
      {
        Object.keys(categories).map((categorie) => (
          <CategoriePreview key={categorie} title={categorie} items={categories[categorie]} />
        ))
      }
    </Container>
  );
}

export default CategoriesPreview;
