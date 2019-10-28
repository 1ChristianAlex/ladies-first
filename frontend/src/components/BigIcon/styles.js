import styled, { css } from 'styled-components';
import { Colors } from 'styles';

export const Container = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-position: center;
  background-size: cover;
  background: ${Colors.white};
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  ${({ bordered }) =>
    bordered &&
    css`
      border: 3px solid ${Colors.primary};
    `};
`;

export const StyledIcon = styled.svg`
  position: absolute;
  margin-right: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${Colors.primary};
`;

export const Notifications = styled.div`
  background: red;
  color: ${Colors.white};
  font-size: 14px;
  border-radius: 50%;
  position: absolute;
  padding-top: 4px;
  width: 25px;
  height: 25px;
  text-align: center;
  right: -5px;
  top: -5px;
`;
