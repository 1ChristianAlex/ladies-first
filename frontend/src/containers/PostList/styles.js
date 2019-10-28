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
