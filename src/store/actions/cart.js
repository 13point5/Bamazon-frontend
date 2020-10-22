import * as actionTypes from "store/actionTypes";

export const add = (productId) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CART_ADD,
      payload: productId,
    });
  };
};

export const remove = (productId) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CART_REMOVE,
      payload: productId,
    });
  };
};
