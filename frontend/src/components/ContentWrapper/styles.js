import styled, { css } from 'styled-components';
import { Colors } from 'styles';

export const Container = styled.div`
  background: ${Colors.white};
  color: ${Colors.dark};
  border-radius: 30px;
  border: 3px solid ${Colors.primary};
  overflow: hidden;
  width: ${({ width }) => width || `100%`};
`;

export const Content = styled.div`
  padding-top: 15px;

  > * {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Header = styled.div`
  background: ${Colors.primary};
  width: 100%;
  padding: 15px 45px;
  color: ${Colors.white};
  font-size: 20px;
  ${props =>
    props.styled &&
    css`
      font-family: Pacifico, sans-serif;
      padding: 0px;
      font-size: 33px;
      text-align: center;
    `}
`;
