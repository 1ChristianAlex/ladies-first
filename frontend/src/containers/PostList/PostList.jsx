import React, { useState, useContext, useEffect } from "react";
import { ContentWrapper, ImageCircle, Input, Button, Post } from "components";
import { StoreContext } from "context/store";
import { updatePosts, createPost } from "context/actions/post";
import { Posts } from "services";

import { Content, SendWrapper, Container, PostWrapper } from "./styles";

// TODO: passar component input para text area
const PostList = () => {
  const [fields, setFields] = useState({
    post: ""
  });
  const {
    store: { user, posts },
    dispatch
  } = useContext(StoreContext);

  const fetchPosts = async () => {
    const posts = await Posts.FetchPosts();

    dispatch(updatePosts(posts));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async () => {
    if (!fields.post) {
      return;
    }

    const { name, lastname } = user;

    const newPost = await Posts.CreatePost({
      content: fields.post,
      title: `${name} ${lastname}` // provisório até ter relacionamento
    });

    dispatch(createPost(newPost));

    setFields(prev => ({ ...prev, post: "" }));
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
        {posts.length > 0
          ? posts.map((post, index) => {
              return (
                <Post
                  key={index}
                  title={post.title}
                  time={post.createdAt}
                  local={post.local}
                  text={post.content}
                  imagens={post.imagens}
                />
              );
            })
          : "loadding"}
      </PostWrapper>
    </Container>
  );
};

export default PostList;
