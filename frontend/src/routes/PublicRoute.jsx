import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import { appName } from "../config/";
import { Auth } from "../services/";

const PublicRoute = ({ component: Component, title, descripion, ...rest }) => {
  const { path } = rest;
  return (
    <>
      <Helmet>
        <title>{`${title} / ${appName}`}</title>
        <meta {...descripion} />
      </Helmet>

      {Auth.isAuth() && path === "/" ? (
        <Redirect to="/timeline" />
      ) : (
        <Route {...rest} component={Component} />
      )}
    </>
  );
};

export default PublicRoute;
