import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastError = ({ mensage }) => {
  toast.error(mensage);
  return (
    <>
      <ToastContainer />
    </>
  );
};
export default ToastError;
