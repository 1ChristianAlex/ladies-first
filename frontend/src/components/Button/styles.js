import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  background-color: #2cbfa5;
  color: white;
  border-radius: 50px;
  padding: 12px 20px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 18px;
  border: 3px solid #2cbfa5;
  position: relative;
  transition: opacity 0.2s ease-in-out;

  :hover {
    opacity: 0.7;
  }

  ${props =>
    props.active &&
    css`
      background-color: white;
      color: #2cbfa5;
    `}

  ${props =>
    props.bigger &&
    css`
      padding: 12px 80px;

      ::after {
        content: '';
        position: absolute;
        width: 80%;
        border-bottom: 1px solid white;
        bottom: 14px;
        left: 50%;
        transform: translateX(-50%);
      }
    `}
`;
