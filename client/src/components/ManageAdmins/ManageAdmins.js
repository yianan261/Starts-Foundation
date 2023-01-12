import React from "react";
import "./ManageAdmins.css";

function ManageAdmins() {
  return (
    <>
      <main className="manageAdminsDiv">
        <h1 className="manageAdminsTitle">Manage Admins</h1>
        <span className="addAdminSpan">
          <button className="addAdminBtn">add admin</button>
        </span>
      </main>
    </>
  );
}

export default ManageAdmins;
