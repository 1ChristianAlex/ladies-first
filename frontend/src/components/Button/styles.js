import styled, { css } from 'styled-components';
import { Colors } from 'styles';

export const StyledButton = styled.button`
    background-color: ${Colors.primary};
    flex: 1;
    position: relative;
    border: 1px solid ${Colors.primary};
    border-radius: 25px;
    padding: 5px 10px;
    color: white;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  ${props =>
    !!props.active &&
    css`
      background-color: ${Colors.white};
      color: ${Colors.primary};
    `}

  ${props =>
    !!props.bigger &&
    css`
      padding: 12px 80px;

      ::after {
        content: '';
        position: absolute;
        width: 80%;
        border-bottom: 1px solid ${Colors.white};
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
      }
    `}
  ${props =>
    !!props.padding &&
    css`
      padding: ${props.padding};
    `}
`;

export const StyledIcon = styled.svg`
  position: absolute;
  margin-right: 10px;
  left: 14px;
`;

export const Text = styled.span`
  font-size: ${props => (props.bigText ? 28 : 20)}px;
  ${props =>
    !!props.hasIcon &&
    css`
      margin-left: 32px;
    `}
`;
