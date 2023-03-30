import React from "react";
import { useContext } from "react";
import { ContextData } from "./Context";

export default function Status() {
  const { squares, setSts, xValue } = useContext(ContextData);
  // const squares = props.squares;

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    setSts("winner");
  } else {
    status = "Next player: " + (xValue ? "X" : "O");
  }
  // props.winner(winner);

  return <div style={{ color: "green" }}>{status}</div>;
}
