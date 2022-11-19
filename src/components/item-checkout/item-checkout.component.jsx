import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context.component';
import {
    Arrow,
    Container, Description, ImageContainer, Price, Quantity, Remove,
} from './item-checkout.styles';

const ItemCheckout = ({ item }) => {
    const {
        name, imageUrl, price, quantity, id,
    } = item;

    const { removeItemToCart } = useContext(CartContext);

    const handleClickRemove = () => {
        removeItemToCart(id);
    };

    return (
      <Container>
        <ImageContainer>
          <img src={imageUrl} alt={name} />
        </ImageContainer>
        <Description>{name}</Description>
        <Quantity>
          <Arrow>&#60;</Arrow>
          {quantity}
          <Arrow>&#62;</Arrow>
        </Quantity>
        <Price>{price}</Price>
        <Remove onClick={handleClickRemove}>&#935;</Remove>
      </Container>
    );
};

export default ItemCheckout;
