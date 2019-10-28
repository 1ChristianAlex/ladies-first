import styled from 'styled-components';
import { Colors } from 'styles';

export const Container = styled.div`
  border: 3px solid ${Colors.primary};
  border-radius: 40px;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledComment = styled.p`
  flex: 1;
  font-size: 22px;
  color: ${Colors.text};
  padding: 0px 12px;
`;

export const Reply = styled.button`
  background: transparent;
  border: none;
  color: ${Colors.primary};
  font-size: 22px;
  margin-right: 30px;
  cursor: pointer;
`;
