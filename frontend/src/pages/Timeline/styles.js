import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 100vh;
  overflow-y: scroll;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  > * {
    margin-top: 30px;
  }
`;

export const SideMenu = styled.div`
  position: fixed;
  left: 5vw;
`;

export const Search = styled.div`
  position: fixed;
  left: 64vw;
`;

export const Posts = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12vw;
  width: 50vw;
`;
