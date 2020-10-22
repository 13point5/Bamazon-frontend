/* eslint-disable */

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Image,
  LeftFrame,
  DetailsFrame,
  Title,
  OrderCount,
  Price,
  Delivery,
  ActionGroup,
  LightText,
} from "components/ProductCard";
import { Row } from "components/Grid";
import { Button, Rating } from "components";

import * as cartActions from "store/actions/cart";
import { useCartProducts } from "store/selectors/cart";
import formatNumber from "utils/formatCurrency";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const cartProducts = useCartProducts();

  const isCartProduct = Boolean(
    cartProducts.find((item) => item === product.id)
  );

  const addToCart = () => {
    dispatch(cartActions.add(product.id));
  };

  const removeFromCart = () => {
    dispatch(cartActions.remove(product.id));
  };

  return (
    <Container>
      <LeftFrame>
        <Image src={product.imgPath} alt="product" />
      </LeftFrame>
      <DetailsFrame>
        <Title>{product.name}</Title>

        <Row>
          <Rating score={product.rating} />
          <OrderCount>{product.orderCount}</OrderCount>
        </Row>

        <ActionGroup>
          <Price>{formatNumber(product.price, "currency")}</Price>
          <LightText>Save extra with No Cost EMI</LightText>
        </ActionGroup>

        <ActionGroup>
          <LightText>
            Get it by <Delivery>{product.delivery}</Delivery>
          </LightText>
          <LightText>FREE Delivery by Amazon</LightText>
        </ActionGroup>

        <ActionGroup>
          <Button
            type="button"
            color={isCartProduct ? "secondary" : "primary"}
            onClick={isCartProduct ? removeFromCart : addToCart}
          >
            {isCartProduct ? "Remove from Cart" : "Add to Cart"}
          </Button>
        </ActionGroup>
      </DetailsFrame>
    </Container>
  );
}
