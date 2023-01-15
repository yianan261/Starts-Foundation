import React from "react";
import "./EditContentNav.css";

function EditContentNav(props) {
  function handleClick(event) {
    props.changePage(event.target.name);
    if (event.target.name === "Blog Manager") {
      window.location.reload();
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary edit-content-nav">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" name="Blog Manager" onClick={handleClick}>
                Blog Manager
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" name="About Us" onClick={handleClick}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" name="Projects" onClick={handleClick}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" name="Media" onClick={handleClick}>
                Media
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" name="Contact Us" onClick={handleClick}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default EditContentNav;
