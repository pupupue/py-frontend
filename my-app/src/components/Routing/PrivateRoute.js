import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  // Passed with props from up top
  component: Component,
  auth: { isAuthenticated, loading },
  ...RouteProps
}) => (
  <Route
    {...RouteProps}
    render={(props) =>
      loading ? (
        "loading..."
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/App/login" />
      )
    }
  />
);
