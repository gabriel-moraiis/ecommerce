import { Container } from './form-input.styles';

function FormInput({ label, ...otherProps }) {
  return (
    <Container>
      <input {...otherProps} />
      {label
         && <label>{label}</label>}
    </Container>
  );
}

export default FormInput;
