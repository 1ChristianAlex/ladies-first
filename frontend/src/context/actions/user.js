import { DELETE_USER, UPDATE_USER } from '../reducer/user';

export const updateUser = user => {
  return {
    type: UPDATE_USER,
    payload: user
  };
};
export const deleteUser = () => {
  return {
    type: DELETE_USER
  };
};
