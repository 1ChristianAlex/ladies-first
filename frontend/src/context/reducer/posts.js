export const UPDATE_POSTS = 'UPDATE_POSTS';

export const initialState = {
  posts: {
    posts: []
  }
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return {
        posts: { ...state, posts: [...action.payload] }
      };
    default:
      return state;
  }
};
