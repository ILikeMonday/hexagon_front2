import React from "react";
import Construction from "../Component/Construction";
import HexGridDemo from "../Component/Grid";
import HexagonGen from "../Component/Hexagongen";
import HexagonGrid from "../Component/HexagonGrid";
import HexagonGrid2 from "../Component/HexagonGrid2";

export default function Playableoverlay(props) {
  return (
    <div>
      {/* <HexGridDemo /> */}
      {/* <Hexagon x={20} y={5} key={`${10}${33}`} IsOwned={false} /> */}
      <HexagonGrid2 />
      {/* <HexGridDemo /> */}
      <Construction />
      {/* {props.children} */}
    </div>
  );
}
