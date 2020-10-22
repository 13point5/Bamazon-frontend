/* eslint-disable */
import React from "react";

import {
  Container,
  Image,
  LeftFrame,
  DetailsFrame,
  Title,
  OrderCount,
  Price,
  ActionGroup,
  ButtonGroup,
  ActionButton,
} from "components/ProductCard";
import { Row } from "components/Grid";
import { Rating } from "components";

export default function CartCard({ product }) {
  return (
    <Container style={{ height: "200px" }}>
      <LeftFrame>
        <Image height="150px" src={product.imgPath} alt="product" />
      </LeftFrame>
      <DetailsFrame>
        <Title style={{ color: "#007185" }}>{product.name}</Title>

        <Row>
          <Rating score={product.rating} />{" "}
          <OrderCount>{product.orderCount}</OrderCount>
        </Row>

        <ActionGroup>
          <Price>{product.price}</Price>
        </ActionGroup>

        <ButtonGroup>
          <ActionButton type="button">Delete</ActionButton>
          <ActionButton type="button">Save for later</ActionButton>
          <ActionButton type="button">See more like this</ActionButton>
        </ButtonGroup>
      </DetailsFrame>
    </Container>
  );
}
