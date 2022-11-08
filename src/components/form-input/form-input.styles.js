import styled from 'styled-components';

export const Container = styled.div`
  @mixin label-shrink {
    background-color: blue;
  }

  position: relative;
  margin: 20px 0;

  input {
    width: 100%;
    padding: 10px 10px 10px 5px;
    border: none;
    font-size: 18px;
    border-radius: none;
    outline: none;
    background: none;
    border-bottom: 2px solid black;
    margin: 25px 0;

    &:focus{
      @include label-shrink();
    }
  }

  input[type='password']{
    letter-spacing: 1px;
  }

  label {
    position: absolute;
    left: 5px;
    top: 5px;
  }
`;
