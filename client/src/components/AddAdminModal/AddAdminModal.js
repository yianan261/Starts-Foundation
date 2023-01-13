import React from "react";
import ReactDOM from "react-dom";
import "./AddAdminModal.css";
import { MdPersonAddAlt1 } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import CreateAdmin from "../CreateAdmin/CreateAdmin";

function AddAdminModal({ handleModal }) {
  //todo: change the admin account signup to email invite?
  return ReactDOM.createPortal(
    <div
      className="overlay"
      style={{
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "grid",
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <div className="modalContainer">
        <div className="modalInnerContainer">
          <span className="closeModalBtn" onClick={() => handleModal()}>
            <AiOutlineCloseCircle />
          </span>
          <span className="iconSpan">
            <MdPersonAddAlt1 size={30} />
          </span>
          <div className="createAdminDiv">
            <h1 className="create-title"> Create a new administrator</h1>
            <CreateAdmin />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modalAddAdminRoot")
  );
}

AddAdminModal.propTypes = {
  handleModal: PropTypes.func,
};
export default AddAdminModal;
