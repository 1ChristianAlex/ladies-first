import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { images } from "assets";
import { ImageCircle, Button, BigIcon } from "components";
import { Container, ProfileContainer, Leafs } from "./styles";

const ProfileBio = ({ userUrl, text, showLeafs }) => {
  const history = useHistory();

  return (
    <Fragment>
      <ProfileContainer>
        <ImageCircle
          size={60}
          src={images.leafPrimary}
          imageSize="auto"
          onClick={() => history.push("/")}
        />
        <Button text="Perfil" bigText />
        <Button text="Currículo" bigText />
        <ImageCircle size={160} src={userUrl} />
        <Button text="Mensagens" bigText />
        <Button text="Interesses" bigText />
        <BigIcon size={35} icon="FaCogs" />
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
  text: PropTypes.string.isRequired,
  showLeafs: PropTypes.bool
};

export default ProfileBio;
