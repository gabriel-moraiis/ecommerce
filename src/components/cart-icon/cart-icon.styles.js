import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  color: ${({ theme }) => theme.green.main};
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.5;
  }
 
`;

export const CartCount = styled.span`
  position: absolute;
  bottom: 5px;
  font-size: 12px;
  font-weight: bold;
`;
