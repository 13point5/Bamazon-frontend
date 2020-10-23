import React from "react";
import { productListData } from "fixtures/products";
import { CartCard } from "containers";
import {
  Container,
  CheckoutFrame,
  CartItemFrame,
  Price,
} from "components/Cart";
import { Button } from "components";
import { NavLink } from "react-router-dom";
import routes from "constants/routes";
import { useCartProducts } from "store/selectors/cart";
import formatNumber from "utils/formatCurrency";

export default function Cart() {
  const cartProducts = useCartProducts();

  const renderCart = () => {
    return cartProducts.map((productId) => {
      const currProduct = productListData.find((prod) => prod.id === productId);
      return <CartCard product={currProduct} key={currProduct.id} />;
    });
  };

  const getSubtotal = () => {
    return cartProducts.reduce((acc, currId) => {
      const currProduct = productListData.find((prod) => prod.id === currId);
      return acc + currProduct.price;
    }, 0);
  };

  return (
    <Container>
      <CartItemFrame>
        <h2>Shopping Cart</h2>
        {renderCart()}
      </CartItemFrame>

      <CheckoutFrame>
        <span>
          Subtotal ({cartProducts.length} items):{" "}
          <Price>{formatNumber(getSubtotal(), "currency")}</Price>
        </span>

        <NavLink to={routes.ORDER_PLACED}>
          <Button width="100%" type="button">
            Proceed to Buy
          </Button>
        </NavLink>
      </CheckoutFrame>
    </Container>
  );
}
