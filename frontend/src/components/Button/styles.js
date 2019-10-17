import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from 'styles';

export const StyledButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  border-radius: 50px;
  padding: 8px 17px;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  border: 3px solid ${Colors.primary};
  position: relative;
  transition: opacity 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    opacity: 0.7;
  }

  ${props => !!props.active && css`
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
`;

export const StyledIcon = styled.svg`
  position: absolute;
  margin-right: 10px;
  left: 14px;
`;

export const Text = styled.span`
  ${props => !!props.hasIcon && css`
    margin-left: 32px;
  `}
`;