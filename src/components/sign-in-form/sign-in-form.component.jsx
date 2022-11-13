import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGooglePopup, signInAuthWithEmailAndPassword } from '../../utils/firebaseApp';
import Button, { BUTTON_TYPES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonsContainer, Container } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

function SignInForm() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate('/');
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) alert('Preencha todos os campos');

    try {
      await signInAuthWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('Usuario não encontrado');
          break;
        case 'auth/wrong-password':
          alert('Senha incorreta');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <Container>
      <h2>Já Possui conta ?</h2>
      <span>Faça login com o google ou com email e senha</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChangeInput}
        />
        <FormInput
          type="password"
          name="password"
          label="Senha"
          value={password}
          onChange={handleChangeInput}
        />
        <ButtonsContainer>
          <Button
            type="submit"
            buttonType={BUTTON_TYPES.inverted}
          >
            Login com email e senha
          </Button>
          <Button
            onClick={signInWithGoogle}
            type="button"
            buttonType={BUTTON_TYPES.googleSignIn}
          >
            Login com Google
          </Button>
        </ButtonsContainer>
      </form>
    </Container>
  );
}

export default SignInForm;
