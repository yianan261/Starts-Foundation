import React from "react";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";
import AdminSideNav from "../../components/AdminSideNav/AdminSideNav";
import "./AdminHomePage.css";

/**
 * admin home page
 * @returns JSX of admin home page
 */
function AdminHomePage() {
  return (
    <div>
      <div className="flex admin-mainDiv">
        <AdminSideNav />
        <AdminDashboard />
      </div>
    </div>
  );
}

export default AdminHomePage;
