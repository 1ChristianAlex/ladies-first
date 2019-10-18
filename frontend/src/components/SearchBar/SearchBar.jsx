import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import { Container, Input, StyledIcon } from './styles';

const SearchBar = ({ value, onChange }) => {
  return (
    <Container>
      <StyledIcon as={FaSearch} size="30" />
      <Input value={value} onChange={onChange} placeholder="Buscar no Leaf" />
    </Container>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchBar;
