import React, { useReducer } from 'react';
import { StoreContext } from '../store/';
import { userReducer, initialState } from '../reducer/user';
import { signReducer, initialState as singState } from '../reducer/signup';
import {
  postReducer,
  initialState as postInitialState
} from '../reducer/posts';

const Store = props => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);
  const [signState, signDispatch] = useReducer(signReducer, singState);
  const [postState, postDispatch] = useReducer(postReducer, postInitialState);

  const combinerReducer = {
    store: {
      ...userState,
      ...signState,
      ...postState
    },
    dispatch: action => {
      userDispatch(action);
      signDispatch(action);
      postDispatch(action);
    }
  };

  return (
    <StoreContext.Provider value={combinerReducer}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default Store;
