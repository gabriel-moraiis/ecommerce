import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { Container, Preview, Title } from './categorie-preview.styles';

function CategoriePreview({ categorie }) {
  const { title, items } = categorie;
  const navigate = useNavigate();
  const handleClickTitle = () => navigate(`/catalogo/${title}`);
  return (
    <Container>
      <Title
        onClick={handleClickTitle}
      >
        {title}
      </Title>
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
