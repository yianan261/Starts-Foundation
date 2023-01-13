import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import About from "./pages/About/About";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RecentNews from "./components/RecentNews/RecentNews";
import Mission from "./components/Mission/Mission";

function App() {
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  //todo: put news in database
  //temporary mock DB
  const mockDB = [
    {
      img_url:
        "https://i.postimg.cc/59wFMrJD/21728951-493199054377977-6778718084527363604-o.jpg",
      caption: "Relief packages distribution started at Hansapur",
      date: "2022-02-13",
    },
    {
      img_url:
        "https://i.postimg.cc/JzFKj6p7/21122488-487214228309793-2615958866157981469-o.jpg",
      caption: "Writing workshop conducted by Starts ",
      date: "2023-01-20",
    },
    {
      img_url:
        "https://i.postimg.cc/Hnm6VrBQ/21741107-493189797712236-1701718477168822142-o.jpg",
      caption: "Starts partners with Himalaya Friends",
      date: "2023-01-13",
    },
  ];

  const [displayTrio, setDisplayTrio] = useState([]);
  
  //todo: put mockDB in dependency list (will be paginated)
  useEffect(() => {
    try {
      //sort the array by time (newest to oldest order)
      mockDB.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      setDisplayTrio([...mockDB]);
    } catch (err) {
      console.error(err);
    }
  },[]);

  console.log("trio", displayTrio);

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} about={about} />
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
      <section className="sectionMission">
        <Mission/>
      </section>
      {/* News Section */}
      <section className="sectionNews">
        <RecentNews displayTrio={displayTrio} />
      </section>
      <span className="scrollBtnSpan">
        <ScrollToTop />
      </span>
    </div>
  );
}

export default App;
