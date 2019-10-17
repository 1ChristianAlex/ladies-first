import React from "react";
import PropTypes from "prop-types";
import * as Fa from "react-icons/fa";

import { Container, StyledIcon } from "./styles";

const BigIcon = ({ icon, border, size }) => {
  const Icon = Fa[icon];

  return (
    <Container bordered={border}>
      <StyledIcon size={size} as={Icon} />
    </Container>
  );
};

BigIcon.defaultProps = {
  icon: "",
  border: true,
  size: 50
};

BigIcon.propTypes = {
  icon: PropTypes.string,
  border: PropTypes.bool,
  size: PropTypes.number
};

export default BigIcon;
