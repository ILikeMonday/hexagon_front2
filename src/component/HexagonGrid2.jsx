import React from "react";
import Hexagon from "./Hexagon";

export default function HexagonGrid2() {
  const field = [
    [0, 1, 2, 3],
    [0, 1, 2, 3],
  ];
  return (
    <div style={{ marginTop: "15vh" }}>
      {field.map((row, j) => (
        <div key={j}>
          {row.map((col, i) => (
            <Hexagon x={j} y={i} key={`${i}${j}`} IsOwned={false} />
          ))}
        </div>
      ))}
    </div>
  );
}
