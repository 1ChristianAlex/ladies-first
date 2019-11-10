import React from 'react';
import { Layout, Sidebar, PostList, SearchSidebar } from 'containers';
import { Container, SideMenu, Search, Posts } from './styles';

// TODO: Refazer layout sem position absolute/fixed
const Timeline = () => {
  return (
    <Layout>
      <Container>
        <SideMenu>
          <Sidebar />
        </SideMenu>
        <Posts>
          <PostList />
        </Posts>
        <Search>
          <SearchSidebar />
        </Search>
      </Container>
    </Layout>
  );
};

export default Timeline;
