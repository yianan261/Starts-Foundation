import React from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../../utils/sideBarData.js";
import "./AdminSideNav.css";

/**
 * Admin side nav component
 * @returns JSX of side nav of admin page
 */
function AdminSideNav() {
  return (
    <div role="complementary">
      <div className="sidenav">
        <ul className="sidenav__list">
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span className="sideNavIcon">{item.icon}</span>
                  <span className="sideNavText">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

AdminSideNav.propTypes = {};

export default AdminSideNav;
