import React from 'react';
import { ProfileCover } from 'components';
import { Layout, ProfilePostList, SearchSidebar } from 'containers';
import { images } from 'assets';
import { Container, Search, Posts } from './styles';

// TODO: Refazer layout sem position absolute/fixed
const Profile = () => {
  return (
    <Layout>
      <ProfileCover imageSrc={images.cover} />
      <Container>
        <Posts>
          <ProfilePostList />
        </Posts>
      </Container>
    </Layout>
  );
};

export default Profile;