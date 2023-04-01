import React from "react";
import Construction from "../component/Construction";

import HexagonGen from "../component/Hexagongen";

import HexagonGrid2 from "../component/HexagonGrid2";

import Test from "../component/Test";
import Popup01 from "../component/Popup01";
export default function Playableoverlay(props) {
  return (
    <div className="playground">
      {/* <HexGridDemo /> */}
      {/* <Hexagon x={20} y={5} key={`${10}${33}`} IsOwned={false} /> */}
      <HexagonGrid2 />
      {/* <HexGridDemo /> */}
      {/* <HexagonGrid2 /> */}
      {/* <HexGridDemo /> */}
      <Construction />
      {/* <Popup01 /> */}

      {/* <Test /> */}
      {/* {props.children} */}
    </div>
  );
}
