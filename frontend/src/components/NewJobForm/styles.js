import styled from 'styled-components';

export const BackgroundClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${window.outerHeight}pt;
  background: transparent;
`;

export const Container = styled.div`
  position: absolute;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  width: 45vw;
`;

export const Form = styled.form`
  > div:not(:first-child) {
    margin-top: 10px;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding: 20px 0px;
  > * {
    margin-left: 20px;
  }
`;

export const Error = styled.span`
  color: red;
  width: 100%;
  padding: 15px 10px;
  display: block;
  background-color: #d8abab;
  border-radius: 15px;
  margin: 15px 0;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(100%, -100%);
`;
