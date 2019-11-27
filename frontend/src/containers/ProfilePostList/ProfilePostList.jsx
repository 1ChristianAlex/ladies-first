import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Post, ProfileBio } from 'components';
import { useStore } from 'context/store';
import { updateFriend } from 'context/actions/friend';
import { Friends } from 'services';
import { Container, PostWrapper } from './styles';

// TODO: passar component input para text area
const ProfilePostList = () => {
  const { friend, dispatch } = useStore();
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await Friends.FetchUser(userId);
      dispatch(updateFriend(data));
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ProfileBio userUrl={friend.url} text={friend.description || ''} />
      <PostWrapper>
        {friend.posts && friend.posts.length
          ? friend.posts.map(post => (
              <Post
                key={post.id}
                title={post.title}
                time={post.createdAt}
                local={post.local}
                text={post.content}
                imagens={post.imagens}
                user={friend}
              />
            ))
          : null}
      </PostWrapper>
    </Container>
  );
};

export default ProfilePostList;
