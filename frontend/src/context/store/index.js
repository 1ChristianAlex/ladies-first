import { createContext } from "react";

export const initialState = {
  store: {
    user: {},
    form: {},
    posts: []
  },
  dispatch: () => {}
};

export const StoreContext = createContext(initialState);

export default StoreContext;
