import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/whitelogo.png";

function Navbar() {
  return (
    <div>
      <nav
        id="mainNavbar"
        className="navbar navbar-expand-md fixed-top navAll"
        role="navigation"
      >
        <div className="container-xl navContainer">
          <span className="logoSpan">
            <img src={logo} className="logo" alt="starts foundation logo" />
          </span>

          <div className="navbar-brand">
            <NavLink className="navbrand-link" to="/">
              Starts Foundation
            </NavLink>
          </div>

          <div className="collapse navbar-collapse" id="navLinks">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/media">
                  Media
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <span className="joinClass">
            <button className="joinBtn">Join Us</button>
          </span>
          <span className="donateClass">
            <button className="donateBtn">Donate</button>
          </span>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {};
export default Navbar;
