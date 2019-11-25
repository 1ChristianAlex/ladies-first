import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import { appName } from "../config/";
import { Auth } from "../services/";
import { useStore } from "../context/store";
import { updateUser } from "../context/actions/user";

const PrivateRoute = ({ component: Component, title, descripion, ...rest }) => {
  const { dispatch } = useStore();

  const getCurrentUser = () => {
    Auth.GetCurrentUser().then(user => {
      dispatch(updateUser(user));
    });
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${title} / ${appName}`}</title>
        <meta {...descripion} />
      </Helmet>
      <Route {...rest}>
        {!Auth.isAuth() ? (
          <Redirect
            to={{
              pathname: "/",
              state: { message: "Você tem que logar primeiro" }
            }}
          />
        ) : (
          <Component />
        )}
      </Route>
    </>
  );
};

export default PrivateRoute;
