import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  
  img {
    width: 100%;
  }
`;

export const ContainerLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  
  a, span{
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.green.main};
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
      opacity: 0.5;
    }
  }

`;

export const LinkContainer = styled(Link)`
  width: 5%;
`;
