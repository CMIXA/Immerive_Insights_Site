import React from "react";

const Button1 = (props) => {
  return (
    <div>
      <a href={props.link}>
        <button>{props.text}</button>
      </a>
    </div>
  );
};

export default Button1;
