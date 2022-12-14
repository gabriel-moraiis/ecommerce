import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context.component';
import Button, { BUTTON_TYPES } from '../button/button.component';
import ItemCart from '../item-cart/item-cart.component';

import { CartDropdownContainer, EmptyMessage, ItemsContainer } from './cart-dropdown.styles';

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('checkout');
  };

  return (
    <CartDropdownContainer>
      {cartItems.length
      ? (
        <ItemsContainer>
          {cartItems.map((item) => (
            <ItemCart key={item.id} item={item} />
        ))}
        </ItemsContainer>
      ) : (
        <EmptyMessage>O carrinho esta vazio</EmptyMessage>
      )}
      <Button
        buttonType={BUTTON_TYPES.inverted}
        onClick={handleClickButton}
      >
        IR PARA O CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
