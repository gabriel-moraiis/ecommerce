import ProductCard from '../product-card/product-card.component';
import { Container, Preview, Title } from './categorie-preview.styles';

function CategoriePreview({ categorie }) {
  const { title, items } = categorie;
  return (
    <Container>
      <Title>{title}</Title>
      <Preview>
        {items.filter((_, index) => (
          index < 4
        )).map((item) => (
          <ProductCard
            key={item.id}
            item={item}
          />
        ))}
      </Preview>
    </Container>
  );
}

export default CategoriePreview;
