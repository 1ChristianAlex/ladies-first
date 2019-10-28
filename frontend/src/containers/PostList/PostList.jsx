import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper, ImageCircle, Input, Button } from 'components';

import { Content, SendWrapper } from './styles';

const PostList = ({ postContent, changePostContent, onSubmit }) => {
  return (
    <ContentWrapper title="Crie uma publicação:" width="50%">
      <Content>
        <ImageCircle
          size={60}
          src="https://avatars0.githubusercontent.com/u/12896082?s=460&v=4"
        />
      <Input placeholder="Conte-nos as novidades!" value={postContent} onChange={e => changePostContent(e.target.value)} />
      </Content>
      <Content itemsMargin={8}>
        <Button text="Anexo" icon="FaPaperclip" />
        <Button text="Pessoas" icon="FaUserTag" />
        <Button text="Locais" icon="FaTags" />
        <SendWrapper>
          <Button text="Enviar" active padding="8px 30px" onClick={onSubmit} />
        </SendWrapper>
      </Content>
    </ContentWrapper>
  );
};

PostList.defaultProps = {
};

PostList.propTypes = {
  postContent: PropTypes.string.isRequired,
  changePostContent: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PostList;
