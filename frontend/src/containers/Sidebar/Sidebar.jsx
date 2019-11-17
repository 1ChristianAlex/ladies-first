import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BigIcon, ImageCircle, LogoMenu, Logout } from "components";
import { StoreContext } from "../../context/store/";
import { Container } from "./styles";

const Sidebar = ({ notifications }) => {
  const {
    store: { user }
  } = useContext(StoreContext);

  return (
    <Container>
      <LogoMenu />
      <ImageCircle size={60} src={user.url} />
      <BigIcon size={40} icon="FaBell" notifications={notifications} />
      <BigIcon size={40} icon="FaPen" />
      <BigIcon size={40} icon="FaCogs" />
      <Logout />
    </Container>
  );
};

Sidebar.defaultProps = {
  notifications: 0
};

Sidebar.propTypes = {
  notifications: PropTypes.number
};

export default Sidebar;
