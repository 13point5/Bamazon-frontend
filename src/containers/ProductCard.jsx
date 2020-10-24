import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import LazyLoad from "react-lazyload";
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
import { isCartProductSelector } from "store/selectors/cart";
import ProductCardPropTypes from "propTypes/ProductCard";
import formatNumber from "utils/formatCurrency";

const ImgFrame = React.memo(({ src }) => {
  return (
    <LeftFrame>
      <LazyLoad height={100} once>
        <Image src={src} alt="product" />
      </LazyLoad>
    </LeftFrame>
  );
});

ImgFrame.propTypes = {
  src: PropTypes.string.isRequired,
};

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const isCartProduct = useSelector((store) =>
    isCartProductSelector(store, product.id)
  );

  const addToCart = useCallback(() => {
    dispatch(cartActions.add(product.id));
  }, [dispatch, product.id]);

  const removeFromCart = useCallback(() => {
    dispatch(cartActions.remove(product.id));
  }, [dispatch, product.id]);

  return (
    <Container>
      <ImgFrame src={product.imgPath} />

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

ProductCard.propTypes = {
  product: ProductCardPropTypes.isRequired,
};

export default ProductCard;
