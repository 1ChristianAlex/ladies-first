import { images } from "assets";

export const UPDATE_FORM = "UPDATE_FORM";
export const DELETE_FORM = "DELETE_FORM";

export const initialState = {
  form: {
    url: images.defaultUser
  }
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        form: {
          ...state.form,
          ...action.payload
        }
      };
    case DELETE_FORM:
      return {
        ...state
      };

    default:
      return state;
  }
};
