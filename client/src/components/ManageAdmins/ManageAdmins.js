import React, { useState } from "react";
import "./ManageAdmins.css";

function ManageAdmins() {
  const [admins, setAdmins] = useState(false);

  //If there are already admins
  //todo: pull admin info from db
  const renderAdmins = () => {
    return (
      <main className="manageAdminsDiv">
        <h1 className="manageAdminsTitle">Manage Admins</h1>
        <span className="addAdminSpan">
          <button className="addAdminBtn">add admin</button>
        </span>
      </main>
    );
  };
  return <>{admins? renderAdmins():null}</>;
}

export default ManageAdmins;
