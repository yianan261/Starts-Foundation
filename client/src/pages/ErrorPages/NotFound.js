import React from "react";
import "./NotFound.css";

/**
 * module that returns error page
 * @returns error page
 */
function NotFound() {
  return (
    <div>
      <h1 className="errorHeader">404</h1>
      <h2 className="notFound">Page Not Found</h2>
    </div>
  );
}

NotFound.propTypes = {};
export default NotFound;
