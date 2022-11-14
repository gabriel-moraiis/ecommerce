import styled from 'styled-components';
import Button from '../button/button.component';

export const CartDropdownContainer = styled.div`
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border: 1px solid black;
  position: absolute;
  z-index: 5;
  top: 70px;
  right: 50px;

  button{
    font-size: 12px;
    margin-top: auto;
  }
`;

export const ItemsContainer = styled.div`
  
`;
