import React, { useState } from 'react';
import { ContentWrapper, ImageCircle, Input, Button, Post } from 'components';

import { Content, SendWrapper, Container, PostWrapper } from './styles';

// TODO: passar component input para text area
const PostList = () => {
  const [fields, setFields] = useState({
    post: ''
  });

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

  const handleSubmit = () => {
    window.alert('Postou! ;)');
  };

  const handleChange = field => text => {
    setFields({ ...fields, [field]: text });
  };

  return (
    <Container>
      <ContentWrapper title="Crie uma publicação:">
        <Content>
          <ImageCircle
            size={60}
            src="https://avatars0.githubusercontent.com/u/12896082?s=460&v=4"
          />
          <Input
            placeholder="Conte-nos as novidades!"
            value={fields.post}
            onChange={e => handleChange('post', e.target.value)}
          />
        </Content>
        <Content itemsMargin={8}>
          <Button text="Anexo" icon="FaPaperclip" />
          <Button text="Pessoas" icon="FaUserTag" />
          <Button text="Locais" icon="FaTags" />
          <SendWrapper>
            <Button text="Enviar" active padding="8px 30px" onClick={handleSubmit} />
          </SendWrapper>
        </Content>
      </ContentWrapper>
      <PostWrapper>
        {posts.length
          ? posts.map((post, index) => (
              <Post
                key={index}
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

export default PostList;
