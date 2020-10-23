import React from "react";
import { CartCard } from "containers";
import {
  Container,
  CheckoutFrame,
  CartItemFrame,
  Price,
} from "components/Cart";
import { Button } from "components";
import { NavLink } from "react-router-dom";
import Routes from "constants/Routes";
import { useCartProducts } from "store/selectors/cart";
import formatNumber from "utils/formatCurrency";

export default function Cart() {
  const { cartProducts, subTotal } = useCartProducts();

  return (
    <Container>
      <CartItemFrame>
        <h2>Shopping Cart</h2>
        {cartProducts.map((prod) => (
          <CartCard product={prod} key={prod.id} />
        ))}
      </CartItemFrame>

      <CheckoutFrame>
        <span>
          Subtotal ({cartProducts.length} items):{" "}
          <Price>{formatNumber(subTotal, "currency")}</Price>
        </span>

        <NavLink to={Routes.ORDER_PLACED}>
          <Button width="100%" type="button">
            Proceed to Buy
          </Button>
        </NavLink>
      </CheckoutFrame>
    </Container>
  );
}
