import React from "react";
import "../styles/Checkouts.css";
const Checkouts = () => {
  return (
    <>
      <div className="container-checkout">
        <div className="description-container">
            <img
              src="/assets/images/logo.webp"
              height="40"
              width="174"
              alt=""
            />
           <div className="contact mb-2">
            <div className="hr-1"></div>
            <h1>Contact Information</h1>
            <div className="hr-1"></div>
          </div>
          <button className="btn-cash">Cash Only!</button>
          <div className="contact mb-2">
            <div className="hr-1"></div>
            <h1>Contact Information</h1>
            <div className="hr-1"></div>
          </div>
        </div>
        <div className="description-container">
          <div className="img-logo">
            <img
              src="/assets/images/logo.webp"
              height="20"
              width="87"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkouts;
