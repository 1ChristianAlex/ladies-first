import styled, { css } from 'styled-components';
import { Colors } from 'styles';

export const Container = styled.div`
  ${props => !!props.imageSrc && css`
    background-image: url("${props.imageSrc}");
  `}
  width: ${({ width }) => width && width}px;
  height: ${({ height }) => height && height}px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 3px solid ${Colors.primary};
`;