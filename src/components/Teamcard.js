import React from "react";
import "../css/Teamcard.css";

const Teamcard = (props) => {
  return (
    <div className="RPcard-container">
      <div className="RPcard-wrapper">
        <img /> {props.img}
        <div className="text">
          <h2>{props.name}</h2>
          <p>{props.position}</p>
        </div>
        <div className="social-links">
          <img />
          <img />
          <img />
          <img />
        </div>
      </div>
    </div>
  );
};

export default Teamcard;
