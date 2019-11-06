import styled from 'styled-components';
import { Colors } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${Colors.primary};
  font-size: 22px;
  margin-bottom: 10px;
`;
