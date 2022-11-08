import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import { Container, ContainerLinks, LogoContainer } from './navigation.styles';

import { UserContext } from '../../contexts/UserContext/user-context.component';
import { signOutUser } from '../../utils/firebaseApp';

function Navigation() {
  const { currentUser } = useContext(UserContext);

  const handleClickSignOut = async () => {
    await signOutUser();
  };

  return (
    <>
      <Container>
        <Link to="/" className="logo-container">
          <LogoContainer>
            <img src={logo} alt="Logo" />
          </LogoContainer>
        </Link>

        <ContainerLinks>
          <Link to="/catalogo">Catalogo</Link>
          {currentUser ? (
            <span onClick={handleClickSignOut}>Sair</span>
          ) : (
            <Link to="/cadastro">Cadastrar-se</Link>
          )}
        </ContainerLinks>
      </Container>
      <Outlet />
    </>
  );
}

export default Navigation;
