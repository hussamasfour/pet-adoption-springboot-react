import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../../utils/tokenService";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        TokenService.getUser() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
