import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <Link to={`/product/${props.id}`}>
        <div className={"card-container"}>
          <img src={props.image} alt="" height="324" width="229" />
          <div className="d-flex justify-content-between">
            <div>
              <h1>{props.title}</h1>
              <span>From {props.price}</span>
            </div>
            <div>
              <img
                className="heart-img"
                src={props.heart}
                alt=""
                height="18"
                width="20"
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
