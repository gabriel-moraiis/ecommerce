import { useContext } from 'react';
import ItemCheckout from '../../components/item-checkout/item-checkout.component';
import { CartContext } from '../../contexts/cart-context.component';
import { Container, Header, HeaderBlock } from './checkout.styles';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

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
    </Container>
  );
};

export default Checkout;
