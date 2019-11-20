import { CREATE_POST, UPDATE_POSTS } from "../reducer/posts";

export const createPost = post => ({
  type: CREATE_POST,
  payload: post
});

export const updatePosts = posts => ({
  type: UPDATE_POSTS,
  payload: posts
});
