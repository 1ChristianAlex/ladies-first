import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";

import { images } from "assets";
import { ImageCircle, Button, BigIcon } from "components";
import { Container, ProfileContainer, Leafs } from "./styles";

const ProfileBio = ({ userUrl, text, showLeafs, leftMenu, rightMenu }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Fragment>
      <ProfileContainer>
        <ImageCircle
          size={60}
          src={images.leafPrimary}
          imageSize="auto"
          onClick={() => history.push("/")}
        />
        {leftMenu.map(menu => (
          <Button
            key={menu.id}
            text={menu.text}
            bigText
            onClick={() => history.push(menu.route)}
            active={menu.route === pathname}
          />
        ))}
        <ImageCircle size={160} src={userUrl} />
        {rightMenu.map(menu => (
          <Button
            key={menu.id}
            text={menu.text}
            bigText
            onClick={() => history.push(menu.route)}
            active={menu.route === pathname}
          />
        ))}
        <BigIcon size={35} icon="FaCogs" />
      </ProfileContainer>
      {showLeafs && <Leafs>+374 leafs</Leafs>}
      {text && <Container>{text}</Container>}
    </Fragment>
  );
};

ProfileBio.defaultProps = {
  text: "",
  showLeafs: false,
  leftMenu: [],
  rightMenu: []
};

ProfileBio.propTypes = {
  userUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  showLeafs: PropTypes.bool,
  leftMenu: PropTypes.array,
  rightMenu: PropTypes.array
};

export default ProfileBio;
