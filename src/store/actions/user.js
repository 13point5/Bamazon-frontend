import * as actionTypes from "store/actionTypes";

export const signIn = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: actionTypes.SIGN_IN,
        });
        resolve("signed in successfully");
      }, 3000);
    });
  };
};
