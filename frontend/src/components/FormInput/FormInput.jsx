import React from 'react';

import { Input } from 'components';
import { Container, Label } from './styles';

const FormInput = ({ label, ...props }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input {...props} borderRadius={15} />
    </Container>
  );
};

export default FormInput;
