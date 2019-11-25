import React, { useState } from "react";
import { Button, Input, Title } from "components";
import { useLocation, useHistory } from "react-router-dom";
import { Auth } from "../../services/auth";
import { useStore } from "../../context/store";
import { updateUser } from "../../context/actions/user";

import { Container, Form, Error, ButtonContainer } from "./styles";

const LoginForm = ({ onSignupPress }) => {
  // TODO: Criar um custom hook pra diminuir código
  const { state } = useLocation();
  let history = useHistory();
  const { dispatch } = useStore();

  let [inputState, setInputState] = useState({});
  let [errorMensage, seterrorMensage] = useState("");

  async function handleLogin(e) {
    try {
      e.preventDefault();
      const auth = new Auth();
      let user = await auth.Login(inputState);
      if (user.url === "") {
        delete user.url;
      }
      dispatch(updateUser(user));

      history.push("/timeline");
    } catch (error) {
      seterrorMensage(error.data.mensage);
    }
  }
  function handleChange(e) {
    let { name, value } = e.target;

    setInputState({
      ...inputState,
      [name]: value
    });
  }
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title underlined text="Página de login" />
        <Input
          placeholder="E-Mail"
          type="email"
          name="email"
          onChange={handleChange}
          required={true}
        />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          onChange={handleChange}
          required={true}
        />
        {(errorMensage || state) && (
          <Error>{errorMensage || state.message}</Error>
        )}
        <ButtonContainer>
          <Button text="Entrar" type="submit" />
          <Button text="Cadastrar" active onClick={onSignupPress} />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default LoginForm;
