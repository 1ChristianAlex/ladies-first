import { DELETE_FRIEND, UPDATE_FRIEND } from "../reducer/friend";

export const updateFriend = friend => {
  return {
    type: UPDATE_FRIEND,
    payload: friend
  };
};
export const deleteFriend = () => {
  return {
    type: DELETE_FRIEND
  };
};
