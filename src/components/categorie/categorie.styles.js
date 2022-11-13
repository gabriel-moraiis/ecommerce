import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h2{
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 24px;
    font-size: 32px;
  }
`;

export const ContainerProducts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
