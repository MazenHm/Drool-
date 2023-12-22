import React from "react";

const CategoryCard = (props) => {
  return (
    <>
      <div className="category-card">
        <img src={props.image} alt="" width="342" height="476" />
        <h3>{props.title}</h3>
        <span>{props.direction}</span>
      </div>
    </>
  );
};

export default CategoryCard;
