import React from "react";

import "./square.css";

export default function Square(props) {
  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}
