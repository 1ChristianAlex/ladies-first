import styled from "styled-components";

export const Container = styled.div`
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
