import React from "react";
import {Link} from "react-router-dom"
/**
 * function that shows error page
 * @returns server error page
 */
function ServerError() {
  return (
    <div className="errorDiv">
      <h1 className="errorHeader">Oops...Something went wrong</h1>
      
    </div>
  );
}

export default ServerError;
