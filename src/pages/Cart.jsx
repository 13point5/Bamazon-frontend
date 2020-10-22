import React from "react";
import { productListData } from "fixtures/products";
import { MainLayout, CartCard } from "containers";
import {
  Container,
  CheckoutFrame,
  CartItemFrame,
  Price,
  Button,
} from "components/Cart";
import { NavLink } from "react-router-dom";
import routes from "constants/routes";

export default function Cart() {
  return (
    <MainLayout>
      <Container>
        <CartItemFrame>
          <h2>Shopping Cart</h2>
          {productListData.map((product) => (
            <CartCard product={product} key={product.id} />
          ))}
        </CartItemFrame>

        <CheckoutFrame>
          <span>
            Subtotal (3 items): <Price>₹ 17,677.00</Price>
          </span>

          <NavLink to={routes.ORDER_PLACED}>
            <Button type="button">Proceed to Buy</Button>
          </NavLink>
        </CheckoutFrame>
      </Container>
    </MainLayout>
  );
}
