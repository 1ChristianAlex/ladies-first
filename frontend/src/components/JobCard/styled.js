import styled from 'styled-components';
import { Colors } from 'styles';
export const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  padding: 15px;
  background-color: ${Colors.white};
  border-radius: 30px;
  margin: 0 10px;
  border: 3px solid ${Colors.primary};
`;
export const CardTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  padding: 15px;
  display: block;
`;
export const CardDescription = styled.p`
  font-size: 15px;
  padding: 5px;
  margin: 10px 0;
`;
export const CardTitleConteiner = styled.div`
  flex: ${props => props.flex || '0 0 auto'};
`;
export const CardContent = styled.div`
  flex: ${props => props.flex || '0 0 100%'};
`;
export const CardImageContainer = styled.div`
  flex: ${props => props.flex || 'inherit'};
`;
