import React from 'react';
import PropTypes from 'prop-types';
import { BigIcon, ImageCircle } from 'components';
import { images } from 'assets';

import { Container } from './styles';

const Sidebar = ({ notifications }) => {
  return (
    <Container>
      <ImageCircle size={60} src={images.leafPrimary} imageSize="auto" />
      <ImageCircle size={60} src="https://avatars0.githubusercontent.com/u/12896082?s=460&v=4" />
      <BigIcon size={40} icon="FaBell" notifications={notifications} />
      <BigIcon size={40} icon="FaPen" />
      <BigIcon size={40} icon="FaCogs" />
    </Container>
  )
};

Sidebar.defaultProps = {
  notifications: 0,
}

Sidebar.propTypes = {
  notifications: PropTypes.number,
}

export default Sidebar;