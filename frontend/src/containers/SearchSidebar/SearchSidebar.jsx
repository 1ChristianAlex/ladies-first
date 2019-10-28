import React from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'components';
import { images } from 'assets';

import { Container } from './styles';

const SearchSidebar = ({}) => {
  return (
    <Container>
      <SearchBar />
    </Container>
  )
};

SearchSidebar.defaultProps = {
}

SearchSidebar.propTypes = {
}

export default SearchSidebar;