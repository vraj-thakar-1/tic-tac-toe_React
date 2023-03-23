import { useState } from "react";
import Square from "./Square";
import Status from "./Status";
export default function Board(props) {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xValue, setXValue] = useState(true);
  const [sts, setSts] = useState("running");
  const winner_handler = (sts) => {
    if (sts) {
      setSts("winner");
    }
  };
  function handleClick(i) {
    const nextSquares = squares.slice(); //new copy

    if (xValue && nextSquares[i] === null && sts !== "winner") {
      nextSquares[i] = "x";
    } else if (!xValue && nextSquares[i] === null && sts !== "winner") {
      nextSquares[i] = "0";
    }

    setSquare(nextSquares);
    setXValue(!xValue);
  }
  return (
    <>
      <div>
        <Status value={xValue} squares={squares} winner={winner_handler} />
      </div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
