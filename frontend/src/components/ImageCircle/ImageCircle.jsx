import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const ImageCircle = ({ src, size, imageSize, onClick }) => {
  return (
    <Container imageSrc={src} width={size} height={size} imageSize={imageSize} onClick={onClick} />
  );
};

ImageCircle.defaultProps = {
  size: 80,
  src: '',
  imageSize: 'cover',
  onClick: () => {},
};

ImageCircle.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string,
  imageSize: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageCircle;
