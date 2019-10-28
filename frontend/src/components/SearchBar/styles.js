import styled from 'styled-components';
import { Colors } from 'styles';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  background: ${Colors.white};
  color: ${Colors.dark};
  padding: 12px 15px;
  border-radius: 30px;
  border: 3px solid ${Colors.primary};
  font-size: 18px;
  position: relative;
  padding-left: 50px;
  ::placeholder {
    color: ${Colors.primary};
    opacity: 0.6;
  }
`;

export const StyledIcon = styled.svg`
  position: absolute;
  color: ${Colors.primary};
  z-index: 1;
  top: 10px;
  left: 16px;
`;
