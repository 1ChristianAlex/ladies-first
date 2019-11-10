import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Auth } from '../services/';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      {!Auth.isAuth() ? (
        <Redirect
          to={{
            pathname: '/',
            state: { message: 'Você tem que logar primeiro' }
          }}
        />
      ) : (
        <Component />
      )}
    </Route>
  );
};

export default PrivateRoute;
