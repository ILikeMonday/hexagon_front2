import React, { useState } from "react";
import { Text, Hexagon } from "react-hexgrid";

const HexagonGen = (props) => {
  const { x, y, columadjust, IsOwned, img } = props;
  const col = x;
  const row = y;
  return (
    <g>
      <Hexagon className={img} q={x - 1} r={columadjust} s={0}>
        <Text className="hextext">
          {row},{col}
        </Text>
      </Hexagon>
    </g>

    // <span style={{ textAlign: "center", position: "relative" }}>
    //   <span>
    //     <span
    //       className="Hexagon-left"
    //       style={{
    //         transform: `translate(${y % 2 === 0 ? "0%" : "-60%"},${
    //           y % 2 === 0 ? "0%" : "-50%"
    //         })`,
    //       }}
    //     ></span>
    //     <span
    //       className="Hexagon-mid"
    //       style={{
    //         position: "relative",
    //         transform: `translate(${y % 2 === 0 ? "0%" : "-30%"},${
    //           y % 2 === 0 ? "0%" : "-50%"
    //         })`,
    //       }}
    //     >
    //       <span
    //         style={{
    //           fontSize: "5vh",
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //         }}
    //       >
    //         {x + "," + y}
    //       </span>
    //     </span>
    //     <span
    //       className="Hexagon-right"
    //       style={{
    //         transform: `translate(${y % 2 === 0 ? "0%" : "-60%"},${
    //           y % 2 === 0 ? "0%" : "-50%"
    //         })`,
    //       }}
    //     ></span>
    //   </span>
    // </span>
  );
};

export default React.memo(HexagonGen);
