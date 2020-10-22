import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "lib/fontawesome";
import "styles/index.css";

import {
  Home,
  SignIn,
  ProductList,
  Cart,
  OrderPlaced,
  Profile,
  Error,
} from "pages";

import Routes from "constants/routes";
import { persistor, store } from "store";
import ProtectedRoute from "components/ProtectedRoute";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path={Routes.HOME} component={Home} exact />
            <Route path={Routes.SIGN_IN} component={SignIn} exact />
            <Route path={Routes.PRODUCT_LIST} component={ProductList} exact />
            <Route path={Routes.CART} component={Cart} exact />
            <ProtectedRoute
              path={Routes.ORDER_PLACED}
              component={OrderPlaced}
              exact
            />
            <ProtectedRoute path={Routes.PROFILE} component={Profile} exact />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
