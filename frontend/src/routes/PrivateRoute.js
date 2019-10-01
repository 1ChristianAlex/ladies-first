import React from "react";
import { Route, Redirect } from "react-router-dom";

// Até integração de função de checar se usuário está logado, retorna false
const isUserLogged = () => false;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      {!isUserLogged() ? (
        <Redirect
          to={{
            pathname: "/login",
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
