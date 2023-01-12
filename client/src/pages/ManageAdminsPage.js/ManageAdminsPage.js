import React from "react";
import ManageAdmins from "../../components/ManageAdmins/ManageAdmins";
import AdminSideNav from "../../components/AdminSideNav/AdminSideNav";

function ManageAdminsPage() {
  return (
    <>
      <div className="d-flex align-items-center admin-mainDiv adminDiv">
        <AdminSideNav />
        <div className="col-2"></div>
        <ManageAdmins />
        <div className="col-2"></div>
      </div>
    </>
  );
}

export default ManageAdminsPage;
