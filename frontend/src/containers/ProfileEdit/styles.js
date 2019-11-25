import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding: 20px 0px;
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

export const Column = styled.div`
  padding: 10px;
  > * {
    margin-bottom: 20px;
  }
`;