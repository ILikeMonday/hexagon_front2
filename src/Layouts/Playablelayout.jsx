import React from "react";
import Construction from "../component/Construction";
import HexagonGrid2 from "../component/HexagonGrid2";
import Popup01 from "../component/Popup01";
export default function Playableoverlay() {
  return (
    <div className="playground">
      <HexagonGrid2 />
      <Construction />
    </div>
  );
}
