import React from 'react';
import PropTypes from 'prop-types';
import { BigIcon, ImageCircle, LogoMenu, Logout } from 'components';
import { useStore } from 'context/store';
import { Container } from './styles';
import { useHistory } from 'react-router-dom';

const Sidebar = ({ notifications }) => {
  const { user } = useStore();
  const history = useHistory();

  return (
    <Container>
      <LogoMenu />
      <ImageCircle
        size={60}
        src={user.url}
        onClick={() => history.push('/profile/me')}
      />
      <BigIcon size={40} icon="FaBell" notifications={notifications} />
      <BigIcon
        size={40}
        icon="FaBriefcase"
        onClick={() => history.push('/jobs/')}
      />
      <BigIcon size={40} icon="FaCogs" />
      <Logout />
    </Container>
  );
};

Sidebar.defaultProps = {
  notifications: 0
};

Sidebar.propTypes = {
  notifications: PropTypes.number
};

export default Sidebar;
