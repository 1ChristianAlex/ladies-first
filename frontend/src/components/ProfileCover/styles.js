import styled from 'styled-components';

export const Cover = styled.div`
  background: url(${props => props.imageSrc});
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
`;
