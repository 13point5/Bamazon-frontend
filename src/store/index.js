import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { userReducer, cartReducer } from "./reducers";

const persistConfig = {
  key: "bamazon",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user", "cart"],
};

const reducers = persistReducer(
  persistConfig,
  combineReducers({ user: userReducer, cart: cartReducer })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const persistor = persistStore(store);

export { store, persistor };
