import React, { useState } from 'react';
import { Layout, Sidebar, PostList, SearchSidebar } from 'containers';

import { Container } from './styles';

const Timeline = () => {
  const [fields, setFields] = useState({
    post: ''
  });

  const handleChange = field => text => {
    setFields({ ...fields, [field]: text });
  };

  const handleSubmit = () => {
    window.alert('Postou! ;)');
  };

  return (
    <Layout>
      <Container>
        <Sidebar />
        <PostList
          postContent={fields.post}
          changePostContent={handleChange('post')}
          onSubmit={handleSubmit}
        />
        <SearchSidebar />
      </Container>
    </Layout>
  );
};

export default Timeline;
