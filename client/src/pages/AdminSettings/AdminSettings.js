import React, { useState } from "react";
import AdminSideNav from "../../components/AdminSideNav/AdminSideNav";
import LogoutMenu from "../../components/LogoutMenu/LogoutMenu";
import "./AdminSettings.css";
function AdminSettings() {
  const [admins, setAdmins] = useState(false);

  return (
    <>
      <div className="d-flex align-items-center admin-mainDiv adminDiv">
        <AdminSideNav />
        <div className="col-2"></div>
        <div className="adminSettings m-5">
          <div className="rowCard">
            <div className="col">User Name:</div>
            <div className="col">
              <label>Dummy Name</label>
            </div>
          </div>
          <div className="rowCard">
            <div className="col">Email:</div>
            <div className="col">
              <label>Dummy@gmail.com</label>
            </div>
          </div>
          <div className="rowCard">
            <div className="col">New Password:</div>
            <div className="col">
              <input className="accountPassword" type="password"></input>
            </div>
          </div>
          <div className="rowCard">
            <div className="col">Confirm Password:</div>
            <div className="col">
              <input className="accountPassword" type="password"></input>
            </div>
          </div>
          <div>
            <span className="updateSettingsSpan">
              <button className="updateSettingsBtn">Update Account</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

AdminSettings.propTypes = {};
export default AdminSettings;
