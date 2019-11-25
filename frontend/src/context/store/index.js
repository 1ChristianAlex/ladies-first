import { createContext, useContext } from "react";

export const initialState = {
  store: {
    user: {},
    form: {},
    posts: [],
    friend: { description: "", posts: [] }
  },
  dispatch: () => {}
};

export const StoreContext = createContext(initialState);

export default StoreContext;

export const useStore = () => {
  const data = useContext(StoreContext);
  return { ...data.store, dispatch: data.dispatch };
};
