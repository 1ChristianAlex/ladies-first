import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 10px;

  > *:not(:last-child) {
    margin-right: ${({ itemsMargin }) => itemsMargin || 20}px;
  }
`;

export const SendWrapper = styled.div`
  margin-left: auto;
  flex: 1;
`;

export const Container = styled.div`
  width: 100%;
`;

export const PostWrapper = styled.div`
  margin-top: 20px;
  > * {
    margin-bottom: 10px;
  }
`;

export const FileInput = styled.input.attrs({
  type: "file"
})`
  display: none;
`;
