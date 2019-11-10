export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const initialState = {
  user: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        user: { ...state, ...action.payload }
      };
    case DELETE_USER:
      return {
        user: { ...initialState }
      };

    default:
      return state;
  }
};
