import React from 'react';

import { StyledInput } from './styles';

const Input = ({ type, value, onChange, placeholder }) => (
  <StyledInput
    type={type}
    value={value}
    onChange={e => onChange(e)}
    placeholder={placeholder}
  />
);

Input.defaultProps = {
  type: 'text',
  onChange: () => {}
};

export default Input;
