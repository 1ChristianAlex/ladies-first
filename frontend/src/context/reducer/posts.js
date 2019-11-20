export const CREATE_POST = "CREATE_POST";
export const UPDATE_POSTS = "UPDATE_POSTS";

export const initialState = {
  posts: []
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return {
        posts: [...action.payload]
      };
    case CREATE_POST:
      return {
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
};
