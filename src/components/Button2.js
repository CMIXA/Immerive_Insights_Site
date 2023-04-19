import React from "react";
import "../css/Buttons.css";

const Button2 = (props) => {
  return (
    <div>
      <a href={props.linkAdress}>
        <button className="button-2">{props.text}</button>
      </a>
    </div>
  );
};

export default Button2;
