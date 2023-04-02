import React from "react";
import Construction from "../component/Construction";

import HexagonGen from "../component/Hexagongen";
import HexagonGrid2 from "../component/HexagonGrid2";
import Popup01 from "../component/Popup01";
export default function Playableoverlay(props) {
  return (
    <div className="playground">
      <HexagonGrid2 />

      <Construction />
    </div>
  );
}
