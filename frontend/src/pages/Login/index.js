import React from "react";

import { Form } from "./styles";

const Login = () => {
  return (
    <Form>
      <h1>Página de login</h1>
      <input type="text" placeholder="Login" />
      <input type="password" placeholder="Senha" />
      <button>Efetuar Login</button>
    </Form>
  );
};

export default Login;
