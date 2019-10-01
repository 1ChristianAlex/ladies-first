import React from "react";
import { useLocation } from "react-router-dom";

import { Form } from "./styles";

const Login = () => {
  // TODO: Criar um custom hook pra diminuir código
  const { state } = useLocation();

  return (
    <Form>
      {state && state.message}
      <h1>Página de login</h1>
      <input type="text" placeholder="Login" />
      <input type="password" placeholder="Senha" />
      <button>Efetuar Login</button>
    </Form>
  );
};

export default Login;
