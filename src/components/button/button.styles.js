import styled from 'styled-components';

export const BaseButton = styled.button`
  width: auto;
  height: 50px;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: bold;
  background-color: white;
  color: black;
  border: 1px solid black;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  color: white;
  background-color: black;

  &:hover {
    color: black;
    background-color: white;
  }
`;

export const GoogleSignIn = styled(BaseButton)`
  color: white;
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
  }
`;
