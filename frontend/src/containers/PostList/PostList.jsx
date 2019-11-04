import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper, ImageCircle, Input, Button, Post } from 'components';

import { Content, SendWrapper, Container, PostWrapper } from './styles';

// TODO: passar component input para text area
const PostList = ({ postContent, changePostContent, onSubmit, posts }) => {
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
            value={postContent}
            onChange={e => changePostContent(e.target.value)}
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
              onClick={onSubmit}
            />
          </SendWrapper>
        </Content>
      </ContentWrapper>
      <PostWrapper>
      {posts.length ? posts.map(post => (
        <Post
          title={post.title}
          time={post.time}
          local={post.local}
          text={post.text}
          image={post.image}
        />
      )) : null}
      </PostWrapper>
    </Container>
  );
};

PostList.defaultProps = {
  posts: []
};

PostList.propTypes = {
  postContent: PropTypes.string.isRequired,
  changePostContent: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  posts: PropTypes.array,
};

export default PostList;
