import styled from 'styled-components';

export const Button = styled.button`
  width: auto;
  height: 50px;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: bold;
  background-color: ${({ buttonType }) => (buttonType === 'googleSignIn' ? '#4285f4' : 'white')};
  border: 1px solid black;
  letter-spacing: 1px;
  cursor: pointer;
`;
