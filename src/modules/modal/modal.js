import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "./ModalContext/ModalContext";
import './modal.css'

const Modal = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modalBox">
          <button
            className="modalBtn"
            onClick={() => handleModal()}
          >
            &times;
          </button>
          <p>{modalContent}</p>
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default Modal;