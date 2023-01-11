import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";

/**
 * about page
 * @returns JSX of about page
 */
function About() {
  return (
    <>
      <Navbar />
      <div className="aboutMainDiv"></div>
    </>
  );
}

About.propTypes = {};
export default About;
