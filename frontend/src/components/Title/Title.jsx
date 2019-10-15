import React from 'react';
import styled from 'styled-components';
import { Colors } from 'styles';

const Title = ({ text, underlined = false, size = 40 }) => (
  <StyledTitle underlined={underlined}>{text}</StyledTitle>
);

const StyledTitle = styled.h1`
  font-family: Pacifico, sans-serif;
  font-size: ${props => props.size}px;
  font-weight: normal;
  color: ${Colors.white};
  text-decoration: ${props => props.underlined && 'underlined'};
  text-align: center;
  padding-top: 20px;
  position: relative;
`;

export default Title;
