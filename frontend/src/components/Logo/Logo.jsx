import React from 'react';
import { images } from 'assets';

import { TitleLogo, Leaf } from './styles';

const Logo = () => (
  <TitleLogo>
    Leaf
    <Leaf src={images.leaf} />
  </TitleLogo>
);

export default Logo;
