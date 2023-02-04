import React from "react";
import "./JoinCause.css";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import { SiHandshake } from "react-icons/si";
import logo from "../../assets/images/bluelogo.png";

function JoinCause() {
  return (
    <div className="aboutMainDiv">
      <div className="container containerCause">
        <h1 className="joinCauseTitle">Join the Cause</h1>
        <div class="row join-row">
          <div class="col join-col-div">
            <span className="join-title">OUR IMPACT</span>
            <div className="circle">
              <SiHandshake className="crowd-icon" />
            </div>
            <span className="bottom-title">1001+ PEOPLE</span>
          </div>
          <div class="col join-col-div">
            <span className="join-title"> OUR FUNDING</span>
            <div className="circle">
              <FaHandHoldingHeart className="funding-icon" />
            </div>
            <span className="bottom-title">$100,000</span>
          </div>
          <div class="col join-col-div">
            <span className="join-title">COLLABORATIONS</span>
            <div className="circle">
              <TbHeartHandshake className="collab-icon" />
            </div>
            <span className="bottom-title">20+ ORGANIZATIONS</span>
          </div>
          <div class="col join-col-div">
            <span className="join-title">ONGOING PROJECTS</span>
            <div className="circle">
              <img
                src={logo}
                alt="starts foundation logo"
                className="starts-logo"
              />
            </div>
            <span className="bottom-title">5+ PROJECTS</span>
          </div>
          {/* <div class="col join-col-div">
            <span className="join-title">ONGOING PROJECTS</span>
            <div className="cirlce">
              <TbHeartHandshake className="collab-icon" />
              <img
                src={logo}
                alt="starts foundation logo"
                className="starts-logo"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default JoinCause;
