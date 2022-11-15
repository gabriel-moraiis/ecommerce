import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context.component';
import Button from '../button/button.component';

import { BackgroundImg, Container, Description } from './product-card.styles';

function ProductCard({ item }) {
  const { name, imageUrl, price } = item;
  const { addItemToCart } = useContext(CartContext);

  const handleClickButton = () => {
    addItemToCart(item);
  };

  return (
    <Container>
      <BackgroundImg imageUrl={imageUrl} />
      <Button
        onClick={handleClickButton}
      >
        ADICIONAR AO CARRINHO

      </Button>
      <Description>
        <span>{name}</span>
        <span>{price}</span>
      </Description>
    </Container>
  );
}

export default ProductCard;
