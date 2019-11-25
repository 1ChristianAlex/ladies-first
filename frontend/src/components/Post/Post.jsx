import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { ContentWrapper, ImageCircle, Button, Comment } from "components";
import { distanceDate } from "helpers/time";
import { StoreContext } from "context/store";

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
} from "./styles";

// TODO: Quebrar componente em outros menores
const Post = ({
  title,
  local,
  time,
  text,
  imagens,
  liked,
  commented,
  shared,
  comments,
  smaller,
  user
}) => {
  const {
    store: { user: userStore }
  } = useContext(StoreContext);
  const history = useHistory();

  const handleUserProfile = () =>
    user.id === userStore.id
      ? history.push("/me")
      : history.push(`/profile/${user.id}`);

  return (
    <ContentWrapper>
      <Header>
        {user ? (
          <ImageCircle size={70} src={user.url} onClick={handleUserProfile} />
        ) : (
          <ImageCircle size={70} />
        )}
        <HeaderContent>
          <HeaderRow>
            <Title>{title}</Title>
            {!smaller && local && (
              <>
                <Small>Está em</Small>
                <Title>{local}</Title>
              </>
            )}
          </HeaderRow>
          <HeaderRow>
            <Small dark>Há {distanceDate(time)}</Small>
          </HeaderRow>
        </HeaderContent>
      </Header>
      {!!text && <PostText>{text}</PostText>}
      {!smaller && (
        <>
          {!!imagens &&
            imagens.map((img, imgIndex) => {
              return <PostImage key={imgIndex} src={img.url} />;
            })}
          <ButtonsContainer>
            <Button
              text={liked ? "Curtiu" : "Curtir"}
              active={!liked}
              icon="FaThumbsUp"
            />
            <Button
              text={commented ? "Comentou" : "Comentar"}
              active={!commented}
              icon="FaComments"
            />
            <Button
              text={shared ? "Compartilhou" : "Compartilhar"}
              active={!shared}
              icon="FaShare"
            />
          </ButtonsContainer>
          <CommentContainer>
            {!!comments && comments.map(comment => <Comment />)}
          </CommentContainer>
        </>
      )}
    </ContentWrapper>
  );
};

Post.defaultProps = {
  liked: false,
  commented: false,
  shared: false,
  comments: null,
  smaller: false
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
  smaller: PropTypes.bool,
  key: PropTypes.any
};

export default Post;
