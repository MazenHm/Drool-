import React from "react";

const OurBrandCard = (props) => {
  return (
    <div className="our-brand-card">
      <img src={props.image} alt="" height="135" width="135" />
      <h3>{props.title}</h3>
      <span className="our-brand-p">{props.description}</span>
    </div>
  );
};

export default OurBrandCard;
