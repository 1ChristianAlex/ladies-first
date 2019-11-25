import React from 'react';
import PropTypes from 'prop-types';

import { Cover } from './styles';

const ProfileCover = ({ imageSrc }) => {
  return <Cover imageSrc={imageSrc} />
};

ProfileCover.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default ProfileCover;
