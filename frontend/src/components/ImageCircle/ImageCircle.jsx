import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const ImageCircle = ({ src, size }) => {
  return <Container imageSrc={src} width={size} height={size} />;
};

ImageCircle.defaultProps = {
  size: 80,
  src: ''
};

ImageCircle.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string
};

export default ImageCircle;
