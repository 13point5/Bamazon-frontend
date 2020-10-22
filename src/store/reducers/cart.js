import * as actionTypes from "store/actionTypes";

const initialState = {
  products: [],
};

const addToCart = (state, payload) => {
  return {
    products: [...state.products, payload],
    ...state,
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD:
      return addToCart(state);
    default:
      return state;
  }
};

export default authReducer;
