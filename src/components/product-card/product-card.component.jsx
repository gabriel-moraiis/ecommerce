import Button from '../button/button.component';

import { BackgroundImg, Container, Description } from './product-card.styles';

function ProductCard({ item }) {
  const { name, imageUrl, price } = item;
  return (
    <Container>
      <BackgroundImg imageUrl={imageUrl} />
      <Button>ADICIONAR AO CARRINHO</Button>
      <Description>
        <span>{name}</span>
        <span>{price}</span>
      </Description>
    </Container>
  );
}

export default ProductCard;
