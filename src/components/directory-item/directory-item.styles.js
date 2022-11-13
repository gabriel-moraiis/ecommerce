import styled from 'styled-components';

export const Body = styled.div`
  width: 150px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  padding: 20px;
  transition: all 0.4s ease-in;

  h2{
    text-transform: uppercase;
  }
  
  span {
    text-transform: uppercase;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  transition: all 4s ease-in;
`;

export const Container = styled.div`
  min-width: 30%;
  border: 1px solid black;
  height: 240px;
  cursor: pointer;
  flex: 1 1 auto;
  margin: 0 7.5px 15px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: green;
  position: relative;

  &:hover {
    
    ${Body}{
      opacity: 1;
    }

    ${BackgroundImage} {
      transform: scale(1.1);
    }
  }
`;
