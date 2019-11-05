import React, { useState } from 'react';
import { Post, ProfileBio } from 'components';

import { Container, PostWrapper } from './styles';

// TODO: passar component input para text area
const ProfilePostList = () => {
  const [posts] = useState([
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

  return (
    <Container>
      <ProfileBio text='"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolorum iure, odit beatae aliquid! Nulla blanditiis maxime possimus inventore! Ab autem nobis excepturi quod ducimus, qui soluta omnis exercitationem maiores!"' />
      <PostWrapper>
        {posts.length
          ? posts.map(post => (
              <Post
                title={post.title}
                time={post.time}
                local={post.local}
                text={post.text}
                image={post.image}
              />
            ))
          : null}
      </PostWrapper>
    </Container>
  );
};

export default ProfilePostList;
