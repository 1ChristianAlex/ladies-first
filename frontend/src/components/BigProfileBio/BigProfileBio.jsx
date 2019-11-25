import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { images } from "assets";
import { ImageCircle, Button, BigIcon } from "components";
import { Container, ProfileContainer, Leafs } from "./styles";

const ProfileBio = ({
  userUrl,
  text,
  showLeafs,
  leftMenu,
  rightMenu,
  active,
  setActive
}) => {
  const history = useHistory();

  const handleMenuClick = id => setActive(id);

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
            text={menu.text}
            bigText
            onClick={() => handleMenuClick(menu.id)}
            active={active === menu.id}
          />
        ))}
        <ImageCircle size={160} src={userUrl} />
        {rightMenu.map(menu => (
          <Button
            text={menu.text}
            bigText
            onClick={() => handleMenuClick(menu.id)}
            active={active === menu.id}
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
  active: 0,
  setActive: () => {},
  leftMenu: [],
  rightMenu: []
};

ProfileBio.propTypes = {
  userUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  showLeafs: PropTypes.bool,
  active: PropTypes.number,
  setActive: PropTypes.func,
  leftMenu: PropTypes.array,
  rightMenu: PropTypes.array
};

export default ProfileBio;
