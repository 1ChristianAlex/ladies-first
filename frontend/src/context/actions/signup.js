import { DELETE_SIGN, UPDATE_SIGN } from "../reducer/signup";

export const updateSign = sing => {
  return {
    type: UPDATE_SIGN,
    payload: sing
  };
};
export const deleteSign = () => {
  return {
    type: DELETE_SIGN
  };
};
