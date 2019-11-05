import React, { fragment } from 'react';
import PropTypes from 'prop-types';

import { images } from 'assets';
import { ImageCircle, Button, BigIcon } from 'components';
import { Container, ProfileContainer, Leafs } from './styles';

const ProfileBio = ({ text }) => {
  return (
    <fragment>
      <ProfileContainer>
        <ImageCircle size={60} src={images.leafPrimary} imageSize="auto" />
        <ImageCircle size={160} src="https://avatars0.githubusercontent.com/u/12896082?s=460&v=4" />
        <Button text="Seguir" bigText />
        <BigIcon size={35} icon="FaEnvelope" />
        <BigIcon size={35} icon="FaEllipsisH" />
      </ProfileContainer>
      <Leafs>+374 leafs</Leafs>
      <Container>{text}</Container>
    </fragment>
  );
};

ProfileBio.propTypes = {
  text: PropTypes.string.isRequired
};

export default ProfileBio;
