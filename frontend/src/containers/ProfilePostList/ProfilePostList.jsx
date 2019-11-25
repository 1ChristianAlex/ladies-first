import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Post, ProfileBio } from "components";
import { StoreContext } from "context/store";
import { updateFriend } from "context/actions/friend";
import { Users } from "services/friend";
import { Container, PostWrapper } from "./styles";

// TODO: passar component input para text area
const ProfilePostList = () => {
  const {
    store: { friend },
    dispatch
  } = useContext(StoreContext);
  const { userId } = useParams();
  const userService = new Users();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await userService.FetchUser(userId);
      dispatch(updateFriend(data));
    };
    fetchUser();
  }, []);

  return (
    <Container>
      <ProfileBio userUrl={friend.url} text={friend.description || ""} />
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
