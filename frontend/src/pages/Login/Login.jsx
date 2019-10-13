import React from 'react';
import { Button, Input, LoginForm, Title } from 'components';
import { useLocation } from 'react-router-dom';

import { Form, Container } from './styles';

const Login = () => {
  // TODO: Criar um custom hook pra diminuir código
  const { state } = useLocation();

  return (
    <Container>
      <LoginForm>
        {state && state.message}
        <Title underlined text="Página de login" />
        <Button text="Entrar" href="https://google.com" />
        <Button text="Cadastrar" active href="https://google.com" />
        <Button text="Entrar" bigger href="https://google.com" />
        <Input placeholder="E-Mail" type="email" />
        <Input placeholder="Senha" type="password" />
      </LoginForm>
    </Container>
  );
};

export default Login;
