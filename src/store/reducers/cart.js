import * as actionTypes from "store/actionTypes";

const initialState = {
  products: [],
};

const add = (state, payload) => {
  return {
    ...state,
    products: [...state.products, payload],
  };
};

const remove = (state, productId) => {
  const oldProducts = [...state.products];
  const newProducts = oldProducts.filter((product) => product !== productId);

  return {
    ...state,
    products: newProducts,
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD:
      return add(state, action.payload);
    case actionTypes.CART_REMOVE:
      return remove(state, action.payload);
    default:
      return state;
  }
};

export default authReducer;
