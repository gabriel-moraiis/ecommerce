import { Container, FormInputLabel } from './form-input.styles';

function FormInput({ label, ...otherProps }) {
  return (
    <Container>
      <input {...otherProps} />
      {label
         && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
    </Container>
  );
}

export default FormInput;
