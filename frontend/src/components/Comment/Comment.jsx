import React from 'react';
import PropTypes from 'prop-types';
import { ImageCircle } from 'components';

import {
  Container,
  StyledComment,
  Reply,
} from './styles';

const Comment = ({
  image,
  text,
  onReply,
}) => (
  <Container>
    <ImageCircle src={image} size={60} />
    <StyledComment>{text}</StyledComment>
    <Reply onClick={onReply} >Responder</Reply>
  </Container>
);

Comment.defaultProps = {
  text: '',
  image: '',
  onReply: () => {},
};

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onReply: PropTypes.func,
};

export default Comment;
