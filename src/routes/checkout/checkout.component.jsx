import { useContext } from 'react';
import ItemCheckout from '../../components/item-checkout/item-checkout.component';
import { CartContext } from '../../contexts/cart-context.component';
import Button from '../../components/button/button.component';
import {
    ButtonEmpty,
 Container, Footer, Header, HeaderBlock, Total,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, total, emptyCart } = useContext(CartContext);

  return (
    <Container>
      <Header>
        <HeaderBlock>
          <span>Produto</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Descrição</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantidade</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Preço</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remover</span>
        </HeaderBlock>
      </Header>
      {cartItems.map((item) => (
        <ItemCheckout key={item.id} item={item} />
      ))}
      <Footer>
        <ButtonEmpty onClick={emptyCart}>
          Esvaziar Carrinho
        </ButtonEmpty>
        <Total>
          Total: R$
          {total}
        </Total>
      </Footer>
    </Container>
  );
};

export default Checkout;
