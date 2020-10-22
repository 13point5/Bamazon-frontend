import { createStore, combineReducers } from "redux";
import { authReducer } from "./reducers";

const reducers = combineReducers(authReducer);

const store = createStore(reducers);

export { store };
