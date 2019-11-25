import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { ImageCircle, Button, BigIcon, LogoMenu } from "components";
import { Container, ProfileContainer, Leafs } from "./styles";

const ProfileBio = ({ userUrl, text, showLeafs }) => {
  return (
    <Fragment>
      <ProfileContainer>
        <LogoMenu />
        <ImageCircle size={160} src={userUrl} />
        <Button text="Seguir" bigText />
        <BigIcon size={35} icon="FaEnvelope" />
        <BigIcon size={35} icon="FaEllipsisH" />
      </ProfileContainer>
      {showLeafs && <Leafs>+374 leafs</Leafs>}
      {text && <Container>{text}</Container>}
    </Fragment>
  );
};

ProfileBio.defaultProps = {
  text: "",
  showLeafs: false
};

ProfileBio.propTypes = {
  userUrl: PropTypes.string.isRequired,
  text: PropTypes.string,
  showLeafs: PropTypes.bool
};

export default ProfileBio;
