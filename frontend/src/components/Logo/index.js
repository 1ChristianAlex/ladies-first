import React from 'react';
import styled from 'styled-components';
import { images } from 'assets';

export const TitleLogo = styled.h1`
  font-family: Pacifico, sans-serif;
  font-size: 80px;
  font-weight: normal;
  color: white;
  text-decoration: underline;
  text-align: center;
  padding-top: 20px;
  position: relative;
`;

const Leaf = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 45px;
`;

const Logo = () => (
  <TitleLogo>
    Leaf
    <Leaf src={images.leaf} />
  </TitleLogo>
);

export default Logo;
