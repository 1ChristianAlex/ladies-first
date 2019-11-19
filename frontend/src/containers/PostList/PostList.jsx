import React, { useState, useContext, useEffect } from "react";
import { ContentWrapper, ImageCircle, Input, Button, Post } from "components";
import { StoreContext } from "context/store";
import { updatePosts } from "context/actions/post";
import { Posts } from "services";

import { Content, SendWrapper, Container, PostWrapper } from "./styles";

// TODO: passar component input para text area
const PostList = () => {
  const [fields, setFields] = useState({
    post: ""
  });

  const {
    store: {
      user,
      posts: { posts }
    },
    dispatch
  } = useContext(StoreContext);

  // const [posts] = useState([
  //   {
  //     title: 'Beatriz Alvez',
  //     time: 'Hoje às 09:30hrs',
  //     local: 'UNA - Barreiro',
  //     text:
  //       'Belo dia para uma reunião com elas! Em breve novidades sobre o curso de Arquitetura, fiquem Ligados :)',
  //     image: 'https://picsum.photos/550/300'
  //   },
  //   {
  //     title: 'Beatriz Alvez',
  //     time: 'Hoje às 09:30hrs',
  //     local: 'UNA - Barreiro',
  //     text:
  //       'Belo dia para uma reunião com elas! Em breve novidades sobre o curso de Arquitetura, fiquem Ligados :)',
  //     image: 'https://picsum.photos/550/300'
  //   },
  //   {
  //     title: 'Beatriz Alvez',
  //     time: 'Hoje às 09:30hrs',
  //     local: 'UNA - Barreiro',
  //     text:
  //       'Belo dia para uma reunião com elas! Em breve novidades sobre o curso de Arquitetura, fiquem Ligados :)',
  //     image: 'https://picsum.photos/550/300'
  //   },
  //   {
  //     title: 'Beatriz Alvez',
  //     time: 'Hoje às 09:30hrs',
  //     local: 'UNA - Barreiro',
  //     text:
  //       'Belo dia para uma reunião com elas! Em breve novidades sobre o curso de Arquitetura, fiquem Ligados :)',
  //     image: 'https://picsum.photos/550/300'
  //   }
  // ]);

  const fetchPosts = async () => {
    const posts = await Posts.FetchPosts();
    dispatch(updatePosts(posts));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = () => {
    window.alert("Postou! ;)");
  };

  const handleChange = field => e => {
    setFields({ ...fields, [field]: e.target.value });
  };

  return (
    <Container>
      <ContentWrapper title="Crie uma publicação:">
        <Content>
          <ImageCircle size={60} src={user.url} />
          <Input
            placeholder="Conte-nos as novidades!"
            value={fields.post}
            onChange={handleChange("post")}
          />
        </Content>
        <Content itemsMargin={8}>
          <Button text="Anexo" icon="FaPaperclip" />
          <Button text="Pessoas" icon="FaUserTag" />
          <Button text="Locais" icon="FaTags" />
          <SendWrapper>
            <Button
              text="Enviar"
              active
              padding="8px 30px"
              onClick={handleSubmit}
            />
          </SendWrapper>
        </Content>
      </ContentWrapper>
      <PostWrapper>
        {posts.length
          ? posts.map((post, index) => (
              <Post
                key={index}
                title={post.title}
                time={post.createdAt}
                local={post.local}
                text={post.content}
                image={post.image}
              />
            ))
          : null}
      </PostWrapper>
    </Container>
  );
};

export default PostList;
