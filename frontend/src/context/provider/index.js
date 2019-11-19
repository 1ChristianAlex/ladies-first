import React, { useReducer } from "react";
import { StoreContext } from "../store/";
import { userReducer, initialState } from "../reducer/user";
import { formReducer, initialState as singState } from "../reducer/form";
import {
  postReducer,
  initialState as postInitialState
} from "../reducer/posts";

const Store = props => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);
  const [formState, formDispatch] = useReducer(formReducer, singState);
  const [postState, postDispatch] = useReducer(postReducer, postInitialState);

  const combinerReducer = {
    store: {
      ...userState,
      ...formState,
      ...postState
    },
    dispatch: action => {
      userDispatch(action);
      formDispatch(action);
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
