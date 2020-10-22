import * as actionTypes from "store/actionTypes";

const initialState = {
  name: "",
};

const signIn = (state) => {
  return {
    ...state,
    name: "Bamazon",
  };
};

const signOut = () => {
  localStorage.clear();
  localStorage.removeItem("persist:bamazon");
  return {};
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return signIn(state);
    case actionTypes.SIGN_OUT:
      return signOut();
    default:
      return state;
  }
};

export default authReducer;
