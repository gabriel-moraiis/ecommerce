import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context.component';
import IconCart from '../icon-cart/icon-cart.component';

import { CartCount, CartIconContainer } from './cart-icon.styles';

const CartIcon = () => {
  const { cartToggle, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer
      onClick={cartToggle}
    >
      <IconCart />
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
