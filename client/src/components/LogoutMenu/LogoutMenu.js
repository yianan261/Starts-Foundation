import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import "./LogoutMenu.css";

function LogoutMenu() {
  return (
    <>
      <div className="dropdown">
        <span
          className="dropdown-span btn btn-secondary dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaRegUserCircle size={30} />
        </span>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <span className="dropdown-item logout">
              Logout{" "}
              <span className="logout-icon">
                {" "}
                <GrLogout size={25} />
              </span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LogoutMenu;
