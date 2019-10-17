import styled, { css } from "styled-components";
import { Colors } from "styles";

export const Container = styled.div`
  width: 80px;
  height: 80px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  position: relative;
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
