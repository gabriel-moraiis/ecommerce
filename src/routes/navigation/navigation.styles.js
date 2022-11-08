import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const LogoContainer = styled.div`
  img {
    width: 5%;
  }
`;

export const ContainerLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  
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
