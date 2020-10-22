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
  Delivery,
  ActionGroup,
  LightText,
} from "components/ProductCard";
import { Button } from "components";
import { Row } from "components/Grid";
import { Rating } from "components";

export default function ProductCard({ product }) {
  return (
    <Container>
      <LeftFrame>
        <Image src={product.imgPath} alt="product" />
      </LeftFrame>
      <DetailsFrame>
        <Title>{product.name}</Title>

        <Row>
          <Rating score={product.rating} />{" "}
          <OrderCount>{product.orderCount}</OrderCount>
        </Row>

        <ActionGroup>
          <Price>{product.price}</Price>
          <LightText>Save extra with No Cost EMI</LightText>
        </ActionGroup>

        <ActionGroup>
          <LightText>
            Get it by <Delivery>{product.delivery}</Delivery>
          </LightText>
          <LightText>FREE Delivery by Amazon</LightText>
        </ActionGroup>

        <ActionGroup>
          <Button type="button">Add to Cart</Button>
        </ActionGroup>
      </DetailsFrame>
    </Container>
  );
}
