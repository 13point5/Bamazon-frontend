import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo, SearchBar } from "components";
import { Container, ActionButton, CartButton } from "components/Header";

import { useAuth } from "store/selectors/user";
import { useCartProducts } from "store/selectors/cart";
import Routes from "constants/routes";

function Header() {
  const user = useAuth();
  const cartProducts = useCartProducts();

  // check render
  // console.log("header");

  return (
    <Container>
      <Logo />

      <SearchBar />

      <ActionButton to={user.name ? Routes.PROFILE : Routes.SIGN_IN}>
        <span>Hello, {user.name || "Sign In"}</span>
        <span>Accounts & Lists</span>
      </ActionButton>

      <CartButton to={Routes.CART}>
        <FontAwesomeIcon icon="shopping-cart" size="2x" />
        <span>{cartProducts.length}</span>
      </CartButton>
    </Container>
  );
}

export default React.memo(Header);
