import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context.component';
import {
    Arrow,
    Container, Description, ImageContainer, Price, Quantity, Remove,
} from './item-checkout.styles';

const ItemCheckout = ({ item }) => {
    const {
        name, imageUrl, price, quantity,
    } = item;

    const { removeItemToCart, addItemToCart, decrementItemToCart } = useContext(CartContext);

    const handleClickRemove = () => {
        removeItemToCart(item);
    };

    const handleClickArrowIncrement = () => {
        addItemToCart(item);
    };

    const handleClickArrowDecrement = () => {
        decrementItemToCart(item);
    };

    return (
      <Container>
        <ImageContainer>
          <img src={imageUrl} alt={name} />
        </ImageContainer>
        <Description>{name}</Description>
        <Quantity>
          <Arrow onClick={handleClickArrowDecrement}>&#60;</Arrow>
          {quantity}
          <Arrow onClick={handleClickArrowIncrement}>&#62;</Arrow>
        </Quantity>
        <Price>{price}</Price>
        <Remove onClick={handleClickRemove}>&#935;</Remove>
      </Container>
    );
};

export default ItemCheckout;
