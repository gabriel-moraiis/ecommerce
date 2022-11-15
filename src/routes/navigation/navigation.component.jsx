import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import {
  Container, ContainerLinks, LinkContainer, LogoContainer,
} from './navigation.styles';

import { UserContext } from '../../contexts/user-context.component';
import { signOutUser } from '../../utils/firebaseApp';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart-context.component';

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleClickSignOut = async () => {
    await signOutUser();
  };

  return (
    <>
      <Container>
        <LinkContainer to="/" className="logo-container">
          <LogoContainer>
            <img src={logo} alt="Logo" />
          </LogoContainer>
        </LinkContainer>

        <ContainerLinks>
          <Link to="/catalogo">Catalogo</Link>
          {currentUser ? (
            <span onClick={handleClickSignOut}>Sair</span>
          ) : (
            <Link to="/cadastro">Cadastrar-se</Link>
          )}
          <CartIcon />
        </ContainerLinks>
        {isCartOpen && <CartDropdown />}
      </Container>
      <Outlet />
    </>
  );
}

export default Navigation;
