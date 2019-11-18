import styled from "styled-components";
import { Colors } from "styles";

export const DropContainer = styled.div`
  padding: 15px;
  border: 3px dotted ${Colors.primary};
  border-radius: 25px;
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
