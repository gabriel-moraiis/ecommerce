import styled from 'styled-components';

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

  button{
    width: 80%;
    position: absolute;
    top: 220px;
    display: none;
  }

  &:hover {
    

    button {
      display: block;
    }

    ${BackgroundImg}{
      opacity: 0.7;
    }
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;

  span {
    font-size: 18px;
  }
`;
