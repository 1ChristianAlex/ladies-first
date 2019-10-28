import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper, ImageCircle, Button, Comment } from 'components';

import {
  Title,
  Header,
  HeaderContent,
  HeaderRow,
  Small,
  PostText,
  PostImage,
  ButtonsContainer,
  CommentContainer
} from './styles';

// TODO: Quebrar componente em outros menores 
const Post = ({
  title,
  local,
  time,
  text,
  image,
  liked,
  commented,
  shared,
  comments
}) => (
  <ContentWrapper>
    <Header>
      <ImageCircle size={70} />
      <HeaderContent>
        <HeaderRow>
          <Title>{title}</Title>
          <Small>Está em</Small>
          <Title>{local}</Title>
        </HeaderRow>
        <HeaderRow>
          <Small dark>{time}</Small>
        </HeaderRow>
      </HeaderContent>
    </Header>
    {!!text && <PostText>{text}</PostText>}
    {!!image && <PostImage src={image} />}
    <ButtonsContainer>
      <Button
        text={liked ? 'Curtiu' : 'Curtir'}
        active={!liked}
        icon="FaThumbsUp"
      />
      <Button
        text={commented ? 'Comentou' : 'Comentar'}
        active={!commented}
        icon="FaComments"
      />
      <Button
        text={shared ? 'Compartilhou' : 'Compartilhar'}
        active={!shared}
        icon="FaShare"
      />
    </ButtonsContainer>
    <CommentContainer>
      {!!comments && comments.map(comment => <Comment />)}
    </CommentContainer>
  </ContentWrapper>
);

Post.defaultProps = {
  liked: false,
  commented: false,
  shared: false,
  comments: null
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  local: PropTypes.string,
  time: PropTypes.string.isRequired,
  text: PropTypes.string,
  image: PropTypes.string,
  comments: PropTypes.array,
  liked: PropTypes.bool,
  commented: PropTypes.bool,
  shared: PropTypes.bool,
}

export default Post;