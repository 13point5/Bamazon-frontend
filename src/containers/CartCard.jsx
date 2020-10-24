import React, { useCallback } from "react";

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
import formatNumber from "utils/formatCurrency";
import { useDispatch } from "react-redux";
import * as cartActions from "store/actions/cart";
import ProductCardPropTypes from "propTypes/ProductCard";

function CartCard({ product }) {
  const dispatch = useDispatch();

  const removeFromCart = useCallback(() => {
    dispatch(cartActions.remove(product.id));
  }, [dispatch, product.id]);

  return (
    <Container style={{ height: "200px" }}>
      <LeftFrame>
        <Image height="150px" src={product.imgPath} alt="product" />
      </LeftFrame>
      <DetailsFrame>
        <Title style={{ color: "#007185" }}>{product.name}</Title>

        <Row>
          <Rating score={product.rating} />
          <OrderCount>{product.orderCount}</OrderCount>
        </Row>

        <ActionGroup>
          <Price>{formatNumber(product.price, "currency")}</Price>
        </ActionGroup>

        <ButtonGroup>
          <ActionButton type="button" onClick={removeFromCart}>
            Delete
          </ActionButton>
          <ActionButton type="button">Save for later</ActionButton>
          <ActionButton type="button">See more like this</ActionButton>
        </ButtonGroup>
      </DetailsFrame>
    </Container>
  );
}

CartCard.propTypes = {
  product: ProductCardPropTypes.isRequired,
};

export default CartCard;
