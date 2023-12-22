import React from "react";

const GuaranteeCard = (props) => {
  return (
    <div className="our-brand-card">
      <img src={props.image} alt="" height="42" width="42" />
      <h5 className="text-white">{props.title}</h5>
      <span className="our-brand-p text-white">{props.description}</span>
    </div>
  );
};

export default GuaranteeCard;
