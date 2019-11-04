import React, { useState } from 'react';
import { Layout, Sidebar, PostList, SearchSidebar } from 'containers';

import { Container, SideMenu, Search, Posts } from './styles';

// TODO: Refazer layout sem position absolute/fixed
const Timeline = () => {
  const [fields, setFields] = useState({
    post: ''
  });
  const [posts, setPosts] = useState([
    {
      title: 'Beatriz Alvez',
      time: 'Hoje às 09:30hrs',
      local: 'UNA - Barreiro',
      text:
        'Belo dia para uma reunião com elas! Em breve novidades sobre o curso de Arquitetura, fiquem Ligados :)',
      image: 'https://picsum.photos/550/300'
    },
    {
      title: 'Beatriz Alvez',
      time: 'Hoje às 09:30hrs',
      local: 'UNA - Barreiro',
      text:
        'Belo dia para uma reunião com elas! Em breve novidades sobre o curso de Arquitetura, fiquem Ligados :)',
      image: 'https://picsum.photos/550/300'
    },
    {
      title: 'Beatriz Alvez',
      time: 'Hoje às 09:30hrs',
      local: 'UNA - Barreiro',
      text:
        'Belo dia para uma reunião com elas! Em breve novidades sobre o curso de Arquitetura, fiquem Ligados :)',
      image: 'https://picsum.photos/550/300'
    },
    {
      title: 'Beatriz Alvez',
      time: 'Hoje às 09:30hrs',
      local: 'UNA - Barreiro',
      text:
        'Belo dia para uma reunião com elas! Em breve novidades sobre o curso de Arquitetura, fiquem Ligados :)',
      image: 'https://picsum.photos/550/300'
    }
  ]);

  const handleChange = field => text => {
    setFields({ ...fields, [field]: text });
  };

  const handleSubmit = () => {
    window.alert('Postou! ;)');
  };

  return (
    <Layout>
      <Container>
        <SideMenu>
          <Sidebar />
        </SideMenu>
        <Posts>
          <PostList
            postContent={fields.post}
            changePostContent={handleChange('post')}
            onSubmit={handleSubmit}
            posts={posts}
          />
        </Posts>
        <Search>
          <SearchSidebar />
        </Search>
      </Container>
    </Layout>
  );
};

export default Timeline;