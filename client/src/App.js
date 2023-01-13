import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import About from "./pages/About/About";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} about={about}/>
      <main>
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
      </main>
      {/* About Section */}
      <section className="sectionAbout" ref={about}>
        <About />
      </section>
      <section className="sectionNews"></section>
      <span className="scrollBtnSpan">
      <ScrollToTop/>
      </span>
    </div>
  );
}

export default App;
