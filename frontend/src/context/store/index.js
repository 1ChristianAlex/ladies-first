import { createContext } from "react";
import { images } from "assets";

export const initialState = {
  store: {
    user: { url: images.defaultUser }
  },
  dispatch: () => {}
};

export const StoreContext = createContext(initialState);

export default StoreContext;
