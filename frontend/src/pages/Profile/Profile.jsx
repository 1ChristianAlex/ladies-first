import React from "react";
import { ProfileCover } from "components";
import { Layout, ProfileContainer } from "containers";
import { images } from "assets";
import { Container, Posts } from "./styles";

// TODO: Refazer layout sem position absolute/fixed
const Profile = ({ match }) => {
  return (
    <Layout>
      <ProfileCover imageSrc={images.cover} />
      <Container>
        <Posts>
          <ProfileContainer match={match} />
        </Posts>
      </Container>
    </Layout>
  );
};

export default Profile;
