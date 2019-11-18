import { UPDATE_POSTS } from '../reducer/posts';

export const updatePosts = posts => {
  return {
    type: UPDATE_POSTS,
    payload: posts
  };
};
