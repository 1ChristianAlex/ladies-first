import React, { useState } from 'react';
import { Button, Input, Title } from 'components';
import { useLocation, useHistory } from 'react-router-dom';
import { Auth } from '../../services/';

import { Container, Form, Error, ButtonContainer } from './styles';

const LoginForm = () => {
  // TODO: Criar um custom hook pra diminuir código
  const { state } = useLocation();
  let history = useHistory();

  let [inputState, setInputState] = useState({});
  let [errorMensage, seterrorMensage] = useState('');

  async function handleLogin(e) {
    try {
      e.preventDefault();
      const auth = new Auth();
      await auth.Login(inputState);
      history.push('/timeline');
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
        {(errorMensage || state) && <Error>{errorMensage || state.message}</Error>}
        <ButtonContainer>
          <Button text="Entrar" type="submit" />
          <Button text="Cadastrar" active />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default LoginForm;
