import React from "react";
import "./pageNotFound.css"
import data from "../../json/Data";

const PageNotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">
        {data?.oops}
      </p>
      <a href="/dashboard" className="home-link">
        {data?.go}
      </a>
    </div>
  );
};

export default PageNotFound;
