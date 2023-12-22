import React from "react";
import "../styles/pages.css";
import Card from "./Card";
const HottestProducts = () => {
  return (
    <div className="cards-container">
      <h1 className="text-center mb-5">Hottest Products</h1>
      <div className="d-flex justify-content-around">
        <Card
          image="/assets/images/open-mind.webp"
          title="Open Mind By John Schulisch"
          price="$33.00"
          heart="/assets/icons/heart-icon.png"
        />
        <Card
          image="/assets/images/Alexander.webp"
          title="Don't settle for boring"
          price="$33.00"
          heart="/assets/icons/heart-icon.png"
        />
        <Card
          image="/assets/images/Fllower.webp"
          title="Mazen Hammouda Edition"
          price="$33.00"
          heart="/assets/icons/heart-icon.png"
        />
        <Card
          image="/assets/images/open-mind.webp"
          title="Open Mind By John Schulisch"
          price="$33.00"
          heart="/assets/icons/heart-icon.png"
        />
      </div>
    </div>
  );
};

export default HottestProducts;
