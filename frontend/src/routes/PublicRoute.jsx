import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { appName } from '../config/';
import { Auth } from '../services/';

const PublicRoute = ({ component: Component, title, descripion, ...rest }) => {
  const { path } = rest;
  return (
    <>
      <Helmet>
        <title>{`${title} / ${appName}`}</title>
        <meta {...descripion} />
      </Helmet>
      <Route {...rest}>
        {Auth.isAuth() && path === '/' ? (
          <Redirect to="/timeline" />
        ) : (
          <Component />
        )}
      </Route>
    </>
  );
};

export default PublicRoute;
