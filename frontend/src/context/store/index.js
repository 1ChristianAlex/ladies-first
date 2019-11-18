import { createContext } from "react";

export const initialState = {
  store: {
    user: {},
    sign: {}
  },
  dispatch: () => {}
};

export const StoreContext = createContext(initialState);

export default StoreContext;
