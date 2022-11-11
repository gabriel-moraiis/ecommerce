import styled from 'styled-components';
import { Button } from '../Button';

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  width: 100%;
  height: 350px;
  margin-right: 20px;
  margin-bottom: 25px;
  flex: 1 1 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Button}{
    width: 80%;
    position: absolute;
    top: 255px;
    opacity: 0.6;
    display: none;
  }

  &:hover {
    

    ${Button} {
      display: block;
    }
  }
`;

export const Description = styled.div`
  display: flex !important;
  justify-content: space-between !important;
`;
