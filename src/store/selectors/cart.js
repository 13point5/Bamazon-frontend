import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { productListData } from "fixtures/products";

const cartProductSelector = (store) => store.cart.products;

export const useCartCount = () => useSelector(cartProductSelector).length;

// use to avoid re-render of all ProductCards when 1 is added/removed from cart
export const isCartProductSelector = createSelector(
  cartProductSelector,
  (_, productId) => productId,
  (products, productId) => Boolean(products.find((item) => item === productId))
);

export const useCartProducts = () => {
  const cartProductIds = useSelector(cartProductSelector);

  const cartProducts = [];
  let subTotal = 0;

  cartProductIds.forEach((prodId) => {
    const currProduct = productListData.find((prod) => prod.id === prodId);

    cartProducts.push(currProduct);
    subTotal += currProduct.price;
  });

  return { cartProducts, subTotal };
};
