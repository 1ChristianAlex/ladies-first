import React, { useContext } from "react";
import { BigIcon } from "components";
import { StoreContext } from "../../context/store";
import { deleteUser } from "../../context/actions/user";
import { Auth } from "services";

const Logout = () => {
  const { store, dispatch } = useContext(StoreContext);
  const handleLogout = async () => {
    console.log(store);

    dispatch(deleteUser());
    Auth.LogOut();
    console.log(store);
  };
  return <BigIcon size={40} icon="FaSignOutAlt" onClick={handleLogout} />;
};
export default Logout;
