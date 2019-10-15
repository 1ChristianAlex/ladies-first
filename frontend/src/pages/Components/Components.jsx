import React from 'react';
import { Button, Input, LoginForm, Title } from 'components';

const Components = () => {
  return (
    <LoginForm>
      <Title underlined text="Página de login" />
      <Button text="Entrar" href="https://google.com" />
      <Button text="Cadastrar" active href="https://google.com" />
      <Button text="Entrar" bigger href="https://google.com" />
      <Input placeholder="E-Mail" type="email" />
      <Input placeholder="Senha" type="password" />
    </LoginForm>
  )
};

export default Components;
