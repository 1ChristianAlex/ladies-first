import React from "react";
import { BigIcon } from "components";
import { useStore } from "../../context/store";
import { deleteUser } from "../../context/actions/user";
import { Auth } from "services";

const Logout = () => {
  const { dispatch, ...store } = useStore();
  const handleLogout = async () => {
    dispatch(deleteUser());
    Auth.LogOut();
    console.log(store);
  };
  return <BigIcon size={40} icon="FaSignOutAlt" onClick={handleLogout} />;
};
export default Logout;
