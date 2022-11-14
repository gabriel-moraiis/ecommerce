import IconCart from '../icon-cart/icon-cart.component';

import { CartCount, CartIconContainer } from './cart-icon.styles';

const CartIcon = () => {
  return (
    <CartIconContainer>
      <IconCart />
      <CartCount>0</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
