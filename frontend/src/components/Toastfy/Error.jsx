import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  notify = () => toast("Wow so easy !");

  render() {
    return (
      <div>
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
}

const ToastError = ({ mensage }) => {
  toast.error(mensage);
  return (
    <>
      <ToastContainer />
    </>
  );
};
export default ToastError;
