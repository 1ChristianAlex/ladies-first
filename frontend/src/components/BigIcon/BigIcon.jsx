import React from 'react';
import PropTypes from 'prop-types';
import * as Fa from 'react-icons/fa';

import { Container, StyledIcon, Notifications } from './styles';

const BigIcon = ({ icon, border, size, notifications, onClick }) => {
  const Icon = Fa[icon];

  return (
    <Container size={size + 20} bordered={border} onClick={onClick}>
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
  notifications: 0,
  onClick: () => {}
};

BigIcon.propTypes = {
  icon: PropTypes.string,
  border: PropTypes.bool,
  size: PropTypes.number,
  notifications: PropTypes.number,
  onClick: PropTypes.func
};

export default BigIcon;