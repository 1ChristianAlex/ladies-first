import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "../services/";
import { StoreContext } from "../context/store";
import { updateUser } from "../context/actions/user";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { dispatch } = useContext(StoreContext);

  const getCurrentUser = () => {
    Auth.GetCurrentUser().then(user => {
      dispatch(updateUser(user));
    });
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
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
  );
};

export default PrivateRoute;
