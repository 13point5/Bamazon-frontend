import { useSelector } from "react-redux";

export function useCartProducts() {
  return useSelector((store) => store.cart.products);
}
