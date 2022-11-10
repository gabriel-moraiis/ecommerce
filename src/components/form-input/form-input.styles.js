import styled, { css } from 'styled-components';

const labelShrink = css`
  top: 10px;
  font-size: 12px;
  `;

export const Container = styled.div`
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

    &:focus ~ label{
      ${labelShrink}
    }
  }

  input[type='password']{
    letter-spacing: 1px;
  }
`;

export const FormInputLabel = styled.label`
    position: absolute;
    left: 6px;
    top: 45px;
    font-size: 16px;
    pointer-events: none;
    transition: all 0.4s ease-in;

    ${({ shrink }) => shrink && labelShrink}
`;
