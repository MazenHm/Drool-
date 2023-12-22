import React from "react";

const ThemeCard = (props) => {
  return (
    <>
    <div className="theme-card">
      <div className="d-flex flex-column align-items-center">
        <img
          src={props.image}
          alt=""
          height={props.height}
          width={props.width}
        />

        <h5>{props.title}</h5>
        <a href="#h">{props.direction}</a>
      </div>
      </div>
    </>
  );
};

export default ThemeCard;
