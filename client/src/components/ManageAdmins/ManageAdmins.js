import React from "react";
import "./ManageAdmins.css";
import PropTypes from "prop-types";

function ManageAdmins({ admins, handleModal }) {
  //If there are already admins
  //todo: pull admin info from db

  const renderAdmins = () => {
    return (
      <main className="manageAdminsDiv">
        <h1 className="manageAdminsTitle">Manage Admins</h1>
        <span className="addAdminSpan">
          <button className="addAdminBtn" onClick={() => handleModal()}>
            add admin
          </button>
        </span>
      </main>
    );
  };

  const renderNoAdmins = () => {
    return (
      <main className="manageAdminsDiv">
        <h1 className="manageAdminsTitle">Add new admin</h1>
        <span className="addAdminSpan">
          <button className="addAdminBtn" onClick={() => handleModal()}>
            add admin
          </button>
        </span>
      </main>
    );
  };
  return <>{admins ? renderAdmins() : renderNoAdmins()}</>;
}

ManageAdmins.propTypes = {
  admins: PropTypes.bool,
  handleModal: PropTypes.func,
};

export default ManageAdmins;
