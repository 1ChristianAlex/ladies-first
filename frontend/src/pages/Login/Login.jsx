import React, { useState } from 'react';
import { Button, Input, LoginForm, Title } from 'components';
import { useLocation } from 'react-router-dom';
import { Public } from '../../services/http';
import { Container } from './styles';
import { log } from 'util';

const Login = () => {
  // TODO: Criar um custom hook pra diminuir código
  const { state } = useLocation();
  let [inputState, setInputState] = useState({});
  async function handleLogin() {
    const api = new Public();
    api.postRequest('/login', inputState);
    console.log(inputState);
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
      <LoginForm>
        {state && state.message}
        <Title underlined text="Página de login" />
        <Button text="Entrar" onClick={handleLogin} />
        <Button text="Cadastrar" active />
        <Input placeholder="E-Mail" type="email" name="email" onChange={handleChange} />
        <Input placeholder="Senha" type="password" name="password" onChange={handleChange} />
      </LoginForm>
    </Container>
  );
};

export default Login;
