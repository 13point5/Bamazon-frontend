import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "store/selectors/user";
import Routes from "constants/Routes";

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
  const user = useAuth();
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return user.name ? (
          <Component {...props} />
        ) : (
          <Redirect to={Routes.SIGN_IN} />
        );
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
};

export default ProtectedRoute;
