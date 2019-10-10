import styled from 'styled-components';
import { Colors } from 'styles';

export const TitleLogo = styled.h1`
  font-family: Pacifico, sans-serif;
  font-size: 80px;
  font-weight: normal;
  color: ${Colors.white};
  text-decoration: underline;
  text-align: center;
  padding-top: 20px;
  position: relative;
`;

export const Leaf = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 45px;
`;
