import styled from 'styled-components';
import { images } from 'assets';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${images.background});
  background-size: cover;
  background-position: center;
  position: relative;

  :after {
    top: 0;
    left: 0;
    z-index: 0;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fbfbfb60;
    position: absolute;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;
