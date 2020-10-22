import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "store/selectors/user";
import routes from "constants/routes";

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
          <Redirect to={routes.SIGN_IN} />
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
