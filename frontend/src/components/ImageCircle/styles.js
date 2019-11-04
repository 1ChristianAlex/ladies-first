import styled, { css } from 'styled-components';
import { Colors } from 'styles';

export const Container = styled.div`
  ${props => !!props.imageSrc && css`
    background: url("${props.imageSrc}") ${Colors.white};
  `}
  width: ${({ width }) => width && width}px;
  height: ${({ height }) => height && height}px;
  background-position: center;
  background-size: ${({ imageSize }) => imageSize};
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 3px solid ${Colors.primary};
  cursor: pointer;
  flex-shrink: 0;
`;