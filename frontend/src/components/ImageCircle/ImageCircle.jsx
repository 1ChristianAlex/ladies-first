import React from 'react'
import PropTypes from 'prop-types';

import { Container } from './styles';

const ImageCircle = ({ src, width, height }) => {
  return (
    <Container imageSrc={src} width={width} height={height} />
  );
};

ImageCircle.defaultProps = {
  width: 80,
  height: 80,
  src: ''
};

ImageCircle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
};

export default ImageCircle;
