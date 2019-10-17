import React from 'react'

import { Container } from './styles';

const ImageCircle = ({ src, width, height }) => {
  return (
    <Container imageSrc={src} width={width} height={height} />
  );
};

ImageCircle.defaultProps = {
  width: 80,
  height: 80,
  src: 'http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg'
};

export default ImageCircle;
