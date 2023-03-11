import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import {
  Container, ContainerLinks, LinkContainer, LogoContainer,
} from './navigation.styles';

import { signOutUser } from '../../utils/firebaseApp';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart-context.component';

import { selectCurrentUser } from '../../store/user/user.selector';

function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
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
