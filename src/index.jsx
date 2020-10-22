import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "lib/fontawesome";
import "styles/index.css";

import { Home, SignIn, ProductList, Cart, OrderPlaced, Error } from "pages";
import Routes from "constants/routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path={Routes.HOME} component={Home} exact />
        <Route path={Routes.SIGN_IN} component={SignIn} exact />
        <Route path={Routes.PRODUCT_LIST} component={ProductList} exact />
        <Route path={Routes.CART} component={Cart} exact />
        <Route path={Routes.ORDER_PLACED} component={OrderPlaced} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
