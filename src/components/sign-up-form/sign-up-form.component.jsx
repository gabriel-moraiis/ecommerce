import { useState } from 'react';
import { Button } from '../Button';
import FormInput from '../form-input/form-input.component';
import { Container } from './sign-up-form.styles';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebaseApp';

const defaultValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultValues);
  const {
    displayName, email, password, confirmPassword,
  } = formFields;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const resetFormFields = () => {
    setFormFields(defaultValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Senhas não correspondem');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email já em uso');
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h2>Não possui uma conta ?</h2>
      <span>Cadastre-se com email e senha</span>
      <FormInput
        type="text"
        label="Nome"
        name="displayName"
        required
        onChange={handleChange}
        value={displayName}
      />
      <FormInput
        type="email"
        label="Email"
        name="email"
        required
        onChange={handleChange}
        value={email}
      />
      <FormInput
        type="password"
        label="Senha"
        name="password"
        required
        onChange={handleChange}
        value={password}
      />
      <FormInput
        type="password"
        label="Confirmar senha"
        name="confirmPassword"
        required
        onChange={handleChange}
        value={confirmPassword}
      />
      <Button type="submit">
        Cadastrar-se
      </Button>
    </Container>
  );
}

export default SignUpForm;
