import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context.component';
import Button, { BUTTON_TYPES } from '../button/button.component';
import ItemCart from '../item-cart/item-cart.component';

import { CartDropdownContainer, ItemsContainer } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <ItemsContainer>
        {cartItems.map((item) => (
          <ItemCart key={item.id} item={item} />
        ))}
      </ItemsContainer>
      <Button
        buttonType={BUTTON_TYPES.inverted}
      >
        IR PARA O CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
