import { images } from "assets";

export const UPDATE_SIGN = "UPDATE_SIGN";
export const DELETE_SIGN = "DELETE_SIGN";

export const initialState = {
  sign: {
    url: images.defaultUser
  }
};

export const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGN:
      return {
        sign: { ...state, ...action.payload }
      };
    case DELETE_SIGN:
      return {
        ...state
      };

    default:
      return state;
  }
};
