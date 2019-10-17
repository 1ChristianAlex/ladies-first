import React from 'react';
import PropTypes from 'prop-types';
import * as Fa from 'react-icons/fa';

import { Container, StyledIcon, Notifications } from './styles';

const BigIcon = ({ icon, border, size, notifications }) => {
  const Icon = Fa[icon];

  return (
    <Container bordered={border}>
      {!!notifications && notifications !== 0 && (
        <Notifications>{notifications}</Notifications>
      )}
      <StyledIcon size={size} as={Icon} />
    </Container>
  );
};

BigIcon.defaultProps = {
  icon: '',
  border: true,
  size: 50,
  notifications: 0
};

BigIcon.propTypes = {
  icon: PropTypes.string,
  border: PropTypes.bool,
  size: PropTypes.number,
  notifications: PropTypes.number
};

export default BigIcon;
