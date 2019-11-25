import { images } from "assets";

export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

export const initialState = {
  friend: {
    url: images.defaultUser
  }
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FRIEND:
      return {
        friend: {
          ...state.friend,
          ...action.payload
        }
      };
    case DELETE_FRIEND:
      return {
        ...initialState
      };

    default:
      return state;
  }
};
