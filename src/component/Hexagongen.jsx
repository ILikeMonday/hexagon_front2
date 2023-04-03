import React, { useState } from "react";
import { Text, Hexagon } from "react-hexgrid";
import space from "./img/mothership.png";
const HexagonGen = (props) => {
  const { x, y, columadjust, IsOwned } = props;
  const col = x;
  const row = y;

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const box = {
    cursor: "pointer",
    backgroundImage: `url(${space})`,
    fillOpacity: isHover ? "1" : "0.75",
    transition: "0.2s",
  };
  // #0400ff
  const ShowMap = () => {
    console.log(row + "," + col);
  };

  const checkown = {
    fill: IsOwned ? "#f32626" : "#5c59ff",
  };

  return (
    <g
      style={box}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={ShowMap}
    >
      {/* fill="pat-1" */}
      <Hexagon style={checkown} q={x - 1} r={columadjust} s={0}>
        <Text className="hextext">
          {row},{col}
        </Text>
      </Hexagon>
    </g>
  );
};

export default HexagonGen;
