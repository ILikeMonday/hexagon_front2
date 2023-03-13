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
<<<<<<< HEAD
      <HexagonGrid2 />
      {/* <HexGridDemo /> */}
=======
      {/* <HexagonGrid2 /> */}
      <HexGridDemo />
>>>>>>> 83e248ebd9093a99014399cbfc7e0921ad24c29f
      <Construction />
      {/* {props.children} */}
    </div>
  );
}
