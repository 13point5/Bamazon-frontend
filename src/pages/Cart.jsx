import React, { useEffect, useState } from "react";
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
import Routes from "constants/Routes";
import { useCartProducts } from "store/selectors/cart";
import formatNumber from "utils/formatCurrency";

export default function Cart() {
  const cartProducts = useCartProducts();

  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const setCartVars = () => {
    const newCartItems = [];
    let newSubTotal = 0;

    cartProducts.forEach((productId) => {
      // get product details
      const currProduct = productListData.find((prod) => prod.id === productId);

      // add cartItem card
      newCartItems.push(
        <CartCard product={currProduct} key={currProduct.id} />
      );

      // add price to subTotal
      newSubTotal += currProduct.price;
    });

    setCartItems(newCartItems);
    setSubTotal(newSubTotal);
  };

  useEffect(() => {
    setCartVars();
  }, [cartProducts]);

  return (
    <Container>
      <CartItemFrame>
        <h2>Shopping Cart</h2>
        {cartItems}
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
