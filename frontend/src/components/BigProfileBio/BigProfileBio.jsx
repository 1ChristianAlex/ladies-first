import React, { fragment } from 'react';
import PropTypes from 'prop-types';

import { images } from 'assets';
import { ImageCircle, Button, BigIcon } from 'components';
import { Container, ProfileContainer, Leafs } from './styles';

const ProfileBio = ({ text, showLeafs }) => {
  return (
    <fragment>
      <ProfileContainer>
        <ImageCircle size={60} src={images.leafPrimary} imageSize="auto" />
        <Button text="Perfil" bigText />
        <Button text="Currículo" bigText />
        <ImageCircle
          size={160}
          src="https://avatars0.githubusercontent.com/u/12896082?s=460&v=4"
        />
        <Button text="Mensagens" bigText />
        <Button text="Interesses" bigText />
        <BigIcon size={35} icon="FaCogs" />
      </ProfileContainer>
      {showLeafs && <Leafs>+374 leafs</Leafs>}
      {text && <Container>{text}</Container>}
    </fragment>
  );
};

ProfileBio.defaultProps = {
  text: '',
  showLeafs: false
};

ProfileBio.propTypes = {
  text: PropTypes.string.isRequired,
  showLeafs: PropTypes.bool
};

export default ProfileBio;
