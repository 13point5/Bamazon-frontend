import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo, SearchBar } from "components";
import { Container, ActionButton, CartButton } from "components/Header";

import Routes from "constants/routes";

function Header() {
  return (
    <Container>
      <Logo />

      <SearchBar />

      <ActionButton to={Routes.SIGN_IN}>
        <span>Hello, Sign In</span>
        <span>Accounts & Lists</span>
      </ActionButton>

      <CartButton to={Routes.CART}>
        <FontAwesomeIcon icon="shopping-cart" size="2x" />
        <span>5</span>
      </CartButton>
    </Container>
  );
}

export default Header;
