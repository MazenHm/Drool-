import React from "react";
import Headers from "./Headers";
import AllFooter from "./AllFooter";

const NotFound = () => {
  return (
    <>
      <Headers />
      <div  className="NotFound">
      <h3>
        We can't find the page you are looking for. Sorry for the inconvenience.
      </h3>
      <p>404 NOT FOUND</p>
      </div>
      <AllFooter />
    </>
  );
};

export default NotFound;
