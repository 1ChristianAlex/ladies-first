import React, { useReducer } from 'react';
import { StoreContext } from '../store/';
import { userReducer, initialState } from '../reducer/user';

const Store = props => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);

  const combinerReducer = {
    store: {
      ...userState
    },
    dispatch: action => userDispatch(action)
  };

  return <StoreContext.Provider value={combinerReducer}>{props.children}</StoreContext.Provider>;
};

export default Store;
