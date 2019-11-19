import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "../services/";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { path } = rest;
  return (
    <Route {...rest}>
      {Auth.isAuth() && path === "/" ? (
        <Redirect to="/timeline" />
      ) : (
        <Component />
      )}
    </Route>
  );
};

export default PublicRoute;
