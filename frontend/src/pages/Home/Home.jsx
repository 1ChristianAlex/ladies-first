import React from 'react';
import { Logo } from 'components';
import { Layout } from 'containers';
import { Login } from '../';

const Home = () => (
  <Layout>
    <Logo />
    <Login />
  </Layout>
);

export default Home;
