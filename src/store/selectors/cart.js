import { useSelector } from "react-redux";
import { productListData } from "fixtures/products";

export function useCartProducts() {
  const cartProductIds = useSelector((store) => store.cart.products);

  const cartProducts = [];
  let subTotal = 0;

  cartProductIds.forEach((prodId) => {
    const currProduct = productListData.find((prod) => prod.id === prodId);

    cartProducts.push(currProduct);
    subTotal += currProduct.price;
  });

  return { cartProducts, subTotal };
}
