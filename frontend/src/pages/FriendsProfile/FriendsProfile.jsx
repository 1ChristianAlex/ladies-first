import React from 'react';
import { ProfileCover } from 'components';
import { Layout, ProfilePostList, SearchSidebar } from 'containers';
import { images } from 'assets';
import { Container, Search, Posts } from './styles';

// TODO: Refazer layout sem position absolute/fixed
const FriedsProfile = () => {
  return (
    <Layout>
      <ProfileCover imageSrc={images.cover} />
      <Container>
        <Posts>
          <ProfilePostList />
        </Posts>
        <Search>
          <SearchSidebar />
        </Search>
      </Container>
    </Layout>
  );
};

export default FriedsProfile;
