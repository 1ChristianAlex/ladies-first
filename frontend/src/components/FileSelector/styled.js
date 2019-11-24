import styled from "styled-components";

export const InputContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-flow: row;
  @media only screen and (max-width: 991px) {
    flex-flow: column;
  }
`;
export const SelectorContainer = styled.div`
  padding: 15px;
  width: ${props => props.width + "%" || "unset"};
  text-align: center;
`;
export const FileInput = styled.input`
  padding: 30px 0px;
`;
