import React from "react";
import Construction from "../component/Construction";
import HexagonGrid2 from "../component/HexagonGrid2";

export default function PlayGround() {
  return (
    <div className="playground">
      <HexagonGrid2 />
      <Construction />
    </div>
  );
}
