import {
  Description,
  Image, ItemCartContainer, Price, PricesContainer, Quantity, Title,
} from './item-cart.styles';

const ItemCart = ({ item }) => {
  const {
    id, name, imageUrl, price, quantity,
  } = item;

  return (
    <ItemCartContainer>
      <Image src={imageUrl} alt={name} />
      <Description>
        <Title>{name}</Title>
        <PricesContainer>
          <Quantity>{quantity}</Quantity>
          X
          <Price>
            {price}
            $
          </Price>
        </PricesContainer>
      </Description>
    </ItemCartContainer>
  );
};

export default ItemCart;
