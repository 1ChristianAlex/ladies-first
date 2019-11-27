import React from 'react';
import { Layout, Sidebar, SearchSidebar, JobContainer } from 'containers';
import { JobsMenu } from 'components';
import { Container, Search, JobsContainer, SideMenu } from './styled';

const JobsPage = () => {
  return (
    <Layout>
      <Container>
        <SideMenu>
          <Sidebar />
        </SideMenu>
        <JobsContainer>
          <JobsMenu />
          <JobContainer />
        </JobsContainer>
        <Search>
          <SearchSidebar />
        </Search>
      </Container>
    </Layout>
  );
};

export default JobsPage;
