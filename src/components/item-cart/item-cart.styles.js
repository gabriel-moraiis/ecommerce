import styled from 'styled-components';

export const ItemCartContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  font-weight: 700;
`;

export const Image = styled.img`
    width: 30%;
`;

export const Title = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const PricesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const Price = styled.span`

`;

export const Quantity = styled.span`

`;
