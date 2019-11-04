import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  > *:not(:last-child) {
    margin-right: ${({ itemsMargin }) => itemsMargin || 20}px;
  }
`;

export const SendWrapper = styled.div`
  margin-left: auto;
`;

export const Container = styled.div`
  width: 50%;
  margin-left: 240px;
`;

export const PostWrapper = styled.div`
  margin-top: 20px;
  > * {
    margin-bottom: 10px;
  }
`;
