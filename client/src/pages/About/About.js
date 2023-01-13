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
      <div className="aboutMainDiv">
        <div className="container contentDiv">
          <div className="row">
            <div className="col elder-pic-div">
              <img
                className="nepali-elder-pic"
                src="https://i.postimg.cc/Gm2DQNds/DSC1103-375-min.jpg"
                alt="Nepali women that starts foundation helps"
              />
            </div>
            <div className="col aboutUsDiv">
              <h1 className="aboutTitle">About Us</h1>
              <p className="aboutContent">
                Starts was initiated as a pivotal platform to embark much needed
                journeys towards sustainable development in Nepali society. It
                is a movement that inspires people to start and take action for
                meaningful change in individuals’ lives in society. Starts
                foundation is a youth-led, non governmental organization with an
                intent to build a resilient and welfare-based society.
                <br />
                We address concerns as fundamental to humanity as ‘Hunger’ or
                ‘independence to live a dignified life for the needy and
                differently-abled.’ We aim to bring highly driven and motivated
                youths together on a shared platform to create a movement for
                change.
              </p>
            </div>
          </div>
          <div className="row bottom-row">
            <div className="col">1 of 3</div>
            <div className="col">2 of 3</div>
            <div className="col">3 of 3</div>
          </div>
        </div>
      </div>
    </>
  );
}

About.propTypes = {};
export default About;
