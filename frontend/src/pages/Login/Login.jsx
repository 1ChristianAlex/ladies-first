import React, { useState } from 'react';
import { LoginForm, SignupForm, Logo } from 'components';

import { Container } from './styles';

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Logo />
      <LoginForm onSignupPress={() => setShowModal(true)} />
      {showModal && <SignupForm onClose={() => setShowModal(false)} />}
    </Container>
  );
};

export default Login;
