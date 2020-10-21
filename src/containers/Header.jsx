import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo, SearchBar } from "components";
import {
  Container,
  MenuIcon,
  ActionButton,
  CartButton,
} from "components/Header";

function Header() {
  return (
    <Container>
      <MenuIcon icon="bars" color="white" size="2x" />
      <Logo />

      <SearchBar />

      <ActionButton to="/">
        <span>Hello, Sign In</span>
        <span>Accounts & Lists</span>
      </ActionButton>

      <CartButton to="/">
        <FontAwesomeIcon icon="shopping-cart" size="2x" />
        <span>5</span>
      </CartButton>
    </Container>
  );
}

export default Header;
