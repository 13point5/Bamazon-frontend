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

import Routes from "constants/Routes";
import { persistor, store } from "store";
import ProtectedRoute from "components/ProtectedRoute";
import { MainLayout } from "containers";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path={Routes.SIGN_IN} component={SignIn} exact />
            <Route path={Routes.HOME} component={Home} exact />

            {/* avoid re-render of Header */}
            <MainLayout>
              <Route path={Routes.PRODUCT_LIST} component={ProductList} exact />
              <Route path={Routes.CART} component={Cart} exact />
              <ProtectedRoute
                path={Routes.ORDER_PLACED}
                component={OrderPlaced}
                exact
              />
              <ProtectedRoute path={Routes.PROFILE} component={Profile} exact />
            </MainLayout>

            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
