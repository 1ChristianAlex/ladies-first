import styled from 'styled-components';
import { images } from 'assets';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  border: 2px dashed lightblue;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto;

  > * {
    margin: 5px 0px;
  }
`;

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
