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
      {!Auth.isAuth() ? (
        <Redirect
          to={{
            pathname: "/",
            state: { message: "Você tem que logar primeiro" }
          }}
        />
      ) : (
        <Route {...rest} component={Component}></Route>
      )}
    </>
  );
};

export default PrivateRoute;
