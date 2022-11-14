import Button, { BUTTON_TYPES } from '../button/button.component';

import { CartDropdownContainer, ItemsContainer } from './cart-dropdown.styles';

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <ItemsContainer>
        <span>item1</span>
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
