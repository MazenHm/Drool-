import React from "react";
import "../styles/pages.css";
const Main = () => {
  return (
    <div className="main-container">
      <div className="d-flex justify-content-arround gap-5">
        <div className="main-paragraphe">
          <h1 className="hero-header">Don’t settle for boring walls</h1>
          <p className="hero-sub">
            Shop some of the worlds most unique contemporary art prints and
            posters. Each handpicked by DROOL’s curation team
          </p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img
            src="/assets/images/header.jpg"
            alt="main-banner"
            height="769"
            width="650"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
