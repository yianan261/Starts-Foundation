import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer" role="main">
        {/* <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://i.postimg.cc/KYy4bCnC/DSC1103-292-min.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/KYy4bCnC/DSC1103-292-min.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/KYy4bCnC/DSC1103-292-min.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/KYy4bCnC/DSC1103-292-min.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
        <div className="banner">
          <div className="subContainer">
            <h1 className="startsFoundation">STARTS FOUNDATION</h1>
            <p className="tagline">Helping communities in Nepal</p>

            <button className="learnBtnMain">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
