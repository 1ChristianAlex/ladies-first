import React from 'react';

import { Container, Header, Content } from './styles';

const ContentWrapper = ({ children, title, width, styledTitle }) => {
  return (
    <Container width={width}>
      {title && <Header styled={styledTitle}>{title}</Header>}
      <Content>{children}</Content>
    </Container>
  );
};

export default ContentWrapper;
