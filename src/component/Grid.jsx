import React from "react";
import HexagonGrid from "./HexagonGrid.jsx";
import times from "lodash/times";
import { Routes, Route, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { a } from "./HexagonGrid.js";
// import { b } from "./HexagonGrid.js";
// import { hexSize } from "./HexagonGrid.js";

const colConfig = 6;
const rowConfig = 10;

const gridWidth = 190 * rowConfig;
const gridHeight = 190 * rowConfig;
const getGridDimensions = (gridWidth, gridHeight) => {
  //   const a = (5 * gridHeight) / (gridWidth * Math.sqrt(2));
  //   const b = gridHeight / (2 * gridWidth) - 2;
  const columns = Math.ceil(colConfig / 2);
  const rows = rowConfig * 2;
  const hexSize = Math.floor(gridWidth / (rows * columns));
  return {
    columns,
    hexSize,
    hexWidth: hexSize * 2,
    hexHeight: Math.ceil(hexSize * Math.sqrt(3)),
    rows,
  };
};

const resultDimension = getGridDimensions(gridWidth, gridHeight);

const HexGridDemo = () => {
  const getHexProps = (hexagon) => {
    return {
      className: "d-flex gap-5 justify-content-center",
      style: {
        fill: "grey",
        stroke: "white",
      },
      onClick: () => alert(`Hexagon n.${hexagon} has been clicked`),
    };
  };

  const renderHexagonContent = (hexagon) => {
    return (
      <text
        x="50%"
        y="50%"
        fontSize={100}
        fontWeight="lighter"
        style={{ fill: "white" }}
        textAnchor="middle"
      >
        {hexagon}
      </text>
    );
  };

  let hexagons = times(
    resultDimension.columns * resultDimension.rows,
    (id) => id
  );

  return (
    <HexagonGrid
      gridWidth={gridWidth}
      gridHeight={gridHeight}
      hexagons={hexagons}
      hexProps={getHexProps}
      renderHexagonContent={renderHexagonContent}
      getGridDimensions={resultDimension}
    />
  );
};

export default HexGridDemo;
