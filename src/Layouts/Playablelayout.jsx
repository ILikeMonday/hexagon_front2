import React from "react";
import Construction from "../component/Construction";
import HexGridDemo from "../component/Grid";
import HexagonGen from "../component/Hexagongen";
import HexagonGrid from "../component/HexagonGrid";
import HexagonGrid2 from "../component/HexagonGrid2";

export default function Playableoverlay(props) {
  return (
    <div>
      {/* <HexGridDemo /> */}
      {/* <Hexagon x={20} y={5} key={`${10}${33}`} IsOwned={false} /> */}
      <HexagonGrid2 />
      {/* <HexGridDemo /> */}
      {/* <HexagonGrid2 /> */}
      <HexGridDemo />
      <Construction />
      {/* {props.children} */}
    </div>
  );
}
