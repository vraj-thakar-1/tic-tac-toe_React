// Context Api

import React, { createContext } from "react";

export const ContextData = createContext({
  squares: Array(9).fill(null),
  setSquare: () => {},
  xValue: true,
  setXvalue: () => {},
  sts: "running",
  setSts: () => {},
});
