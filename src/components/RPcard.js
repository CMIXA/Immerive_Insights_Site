import React from "react";
import "../css/RPcard.css";
import check from "../images/check.png";

const RPcard = (props) => {
  return (
    <div className="RPcard-container">
      <div className="RPcard-wrapper">
        <img src={props.img} />
        <h2>{props.title}</h2>
        <div className="checkList-container">
          <div className="checkList">
            <img src={check} />
            <p>Unmoderated Usability Tests</p>
          </div>
          <div className="checkList">
            <img src={check} />
            <p>Moderated Usability Tests</p>
          </div>
          <div className="checkList">
            <img src={check} />
            <p>User Interviews</p>
          </div>
        </div>
        <a href={props.linkAddress}>{props.linkTitle}</a>
      </div>
    </div>
  );
};

export default RPcard;
