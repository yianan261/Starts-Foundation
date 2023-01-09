import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer" role="main">
        <div className="banner">
          <div className="subContainer">
            <h1 className="startsFoundation">STARTS FOUNDATION</h1>
            <p className="tagline">Amongst all the chaos, we thrive with solidarity</p>
            <button className="donateBtnMain">Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
