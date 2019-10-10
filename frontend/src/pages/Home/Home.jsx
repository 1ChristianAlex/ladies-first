import React from 'react';
import { Logo, Button } from 'components';
import { Container } from './styles';

const Home = () => (
  <Container>
    <Logo />
    <Button text="Entrar" href="https://google.com" />
    <Button text="Cadastrar" active href="https://google.com" />
    <Button text="Entrar" bigger href="https://google.com" />
  </Container>
);

export default Home;
