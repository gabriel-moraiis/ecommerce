import shopData from '../../utils/SHOP_DATA';
import CategoriePreview from '../categorie-preview/categorie-preview.component';
import { Container } from './categories-preview.styles';

function CategoriesPreview() {
  return (
    <Container>
      {shopData.map((categorie) => (
        <CategoriePreview key={categorie.title} categorie={categorie} />
      ))}
    </Container>
  );
}

export default CategoriesPreview;
