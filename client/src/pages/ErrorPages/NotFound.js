import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

/**
 * module that returns error page
 * @returns error page
 */
function NotFound() {
  return (
    <div className="notFoundMainDiv">
      <h1 className="errorHeader">404</h1>
      <h2 className="notFound">Page Not Found</h2>
      <span className="backHomeSpan">
        <Link className="backHome" to="/">
          Back Home
        </Link>
      </span>
    </div>
  );
}

NotFound.propTypes = {};
export default NotFound;
