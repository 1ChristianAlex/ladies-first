import React, { useReducer } from "react";
import { StoreContext } from "../store/";
import { userReducer, initialState } from "../reducer/user";
import { signReducer, initialState as singState } from "../reducer/signup";

const Store = props => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);
  const [signState, signDispatch] = useReducer(signReducer, singState);

  const combinerReducer = {
    store: {
      ...userState,
      ...signState
    },
    dispatch: action => {
      userDispatch(action);
      signDispatch(action);
    }
  };

  return (
    <StoreContext.Provider value={combinerReducer}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default Store;
