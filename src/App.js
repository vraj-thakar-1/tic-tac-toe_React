import "./App.css";
import { useState } from "react";
import Board from "./components/Board";
import { ContextData } from "./components/Context";

function App() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xValue, setXvalue] = useState(true);
  const [sts, setSts] = useState("running");
  return (
    <ContextData.Provider
      value={{ squares, setSquare, xValue, setXvalue, sts, setSts }}
    >
      <Board />
    </ContextData.Provider>
  );
}

export default App;
