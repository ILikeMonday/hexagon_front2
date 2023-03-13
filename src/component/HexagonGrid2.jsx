import React from "react";
// import Hexagon from "./Hexagon";
import { HexGrid, Layout, Hexagon, GridGenerator } from "react-hexgrid";
import Hexagongen from "./Hexagongen";

export default function HexagonGrid2() {
  const hexagonSize = { x: 8, y: 8 };
  const m = 10;
  const n = 5;
  const hexagons = [];
  // for (let y = 0; y <= m; y++) {
  //   for (let x = 0; x <= n; x++) {
  //     hexagons.push(
  //       <Hexagongen key={`hex-${x}`} x={x} y={-x} IsOwned={false} />
  //     );
  //   }
  // }
  return (
    <div className="App" style={{ color: "white" }}>
      <h1>Basic example of HexGrid usage.</h1>
      <HexGrid width={1200} height={800}>
        <Layout size={hexagonSize} spacing={1.05} flat={true}>
          {/* {hexagons} */}
          <Hexagon q={0} r={0} s={0} />
          <Hexagon q={1} r={-1} s={0} />
          <Hexagon q={2} r={-1} s={0} />
          <Hexagon q={3} r={-2} s={0} />
          <Hexagon q={4} r={-2} s={0} />
          <Hexagon q={5} r={-3} s={0} />
          {/* ??? */}
          <Hexagon q={0} r={1} s={0} />
          <Hexagon q={1} r={0} s={0} />
          <Hexagon q={2} r={0} s={0} />
          <Hexagon q={3} r={-1} s={0} />
          <Hexagon q={4} r={-1} s={0} />
          <Hexagon q={5} r={-2} s={0} />
        </Layout>
      </HexGrid>
    </div>
  );
}
