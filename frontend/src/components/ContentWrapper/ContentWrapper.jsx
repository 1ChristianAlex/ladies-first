import React from "react";

import { Container, Header, Content } from "./styles";

const ContentWrapper = ({ children, title, width, styledTitle, overflow }) => {
  return (
    <Container width={width} overflow={overflow}>
      {title && <Header styled={styledTitle}>{title}</Header>}
      <Content>{children}</Content>
    </Container>
  );
};

export default ContentWrapper;
