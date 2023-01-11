import React from "react";

/**
 * function that shows error page
 * @returns server error page
 */
function ServerError() {
  return <h1 className="errorHeader">Oops...Something went wrong</h1>;
}

ServerError.propTypes = {};
export default ServerError;
