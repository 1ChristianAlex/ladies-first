import { DELETE_FORM, UPDATE_FORM } from "../reducer/form";

export const updateForm = form => {
  return {
    type: UPDATE_FORM,
    payload: form
  };
};
export const deleteForm = () => {
  return {
    type: DELETE_FORM
  };
};
