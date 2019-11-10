import React from 'react';
import { ImageCircle } from '../';
import { LinkLogo } from './styles';
import { images } from 'assets';

const LogoMenu = () => {
  return (
    <LinkLogo to="/timeline">
      <ImageCircle size={60} src={images.leafPrimary} imageSize="auto" />
    </LinkLogo>
  );
};
export default LogoMenu;
