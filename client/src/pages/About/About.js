import React from "react";
import "./About.css";

/**
 * about page
 * @returns JSX of about page
 */
function About() {
  return (
    <>
      <div className="aboutMainDiv">
        <div className="container-xl contentDiv">
          <div className="row">
            <div className="col first-pic-div">
              <img
                className="first-pic"
                src="https://i.postimg.cc/qRxDPLvn/106747271-1173706192993923-189927841014050624-n.jpg"
                alt="Starts Foundation helping"
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
            <div className="col small-img">
              <img
                className="small-img-class"
                src="https://i.postimg.cc/h4LVPT2h/DSC1103-244-min.jpg"
                alt="nepali young girls"
              />
            </div>
            <div className="col small-img">
              <img
                className="small-img-class"
                src="https://i.postimg.cc/Gm2DQNds/DSC1103-375-min.jpg"
                alt="nepali elderly community"
              />
            </div>
            <div className="col small-img">
              <img
                className="small-img-class"
                src="https://i.postimg.cc/0N4xF9rD/21125572-487241621640387-7562562015376023538-o.jpg"
                alt="nepali students"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

About.propTypes = {};
export default About;
