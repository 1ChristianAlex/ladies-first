import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 100vh;
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
  width: 33vw;
`;

export const JobsContainer = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12vw;
  width: 50vw;
`;
