import { createContext } from 'react';

export const initialState = {
  store: {},
  dispatch: () => {}
};

export const StoreContext = createContext(initialState);

export default StoreContext;
