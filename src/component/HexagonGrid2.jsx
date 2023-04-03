import { Client } from "@stomp/stompjs";
import React, { useState } from "react";
import { useEffect } from "react";
// import Hexagon from "./Hexagon";
import { HexGrid, Layout, Hexagon, Pattern } from "react-hexgrid";
import Hexagongen from "./Hexagongen";
import mothership from "./img/mothership.png";
import Zoomout from "./img/magnifying-glass.png";
import Zoomin from "./img/zoom-in.png";
import Reset from "./img/reset.png";

export default function HexagonGrid2() {
  // const [hexagons, setHexagons] = useState([[]]);
  const [scaleconfig, setScaleconfig] = useState(100);
  const hexagonSize = { x: 8, y: 8 };
  const [row, setrow] = useState(10);
  const [col, setcol] = useState(10);
  const [owned, setOwned] = useState([]);
  let client;

  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: window.ip,
        onConnect: () => {
          client.subscribe("/app/RowCol", (message) => {
            const body = JSON.parse(message.body);
            setrow(body[0]);
            setcol(body[1]);
          });
          client.subscribe("/app/Hexmap", (message) => {
            const body = JSON.parse(message.body);
            setOwned(body);
            console.log(owned);
          });
        },
      });
      client.activate();
    }
  }, []);
  const hexagons = [];
  for (let y = 0; y < row; y++) {
    let j = y;
    let k = 1;
    for (let x = 0; x < col; x++) {
      k++;
      hexagons.push({
        x: x + 1,
        y: y + 1,
        columadjust: j,
        IsOwned: false,
        img: true ? "own" : "notown",
      });
      if (k % 2 === 0) j--;
    }
  }
  const zoomin = () => {
    if (scaleconfig >= 500) return;
    setScaleconfig(scaleconfig + 10);
  };
  const zoomout = () => {
    if (scaleconfig <= 10) return;
    setScaleconfig(scaleconfig - 10);
  };
  const reset = () => {
    setScaleconfig(100);
  };
  const own = () => {
    console.log(1);
    hexagons[0] = <></>;
    console.log(hexagons[0]);
    // hexagons.splice(
    //   0,
    //   1,
    //   <Hexagongen
    //     key={`hex-${0},${0}`}
    //     x={0}
    //     y={0}
    //     IsOwned={false}
    //     img={"own"}
    //   />
    // );
    console.log(2);
  };
  return (
    <div className="left-div">
      <h1
        style={{
          margin: "0 auto",
          fontSize: "50px",
          padding: "10px 20px",
          color: "#3E9DDE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Space field
      </h1>
      <br />
      <div className="HexGrid">
        {/* <span style={{ color: "white" }}>hi</span> */}

        <HexGrid
          style={{
            transform: `scale(${scaleconfig / 100})`,
            transformOrigin: "0 0",
          }}
          width={1200}
          height={1080}
          viewBox={`${-8 - col} ${col === 1 ? -7 : -14} ${14.5 * col} ${
            row <= 5 ? 20 * row : 16 * row
          }`}
        >
          <Layout size={hexagonSize} spacing={1.05} flat={true}>
            {hexagons.map((props) => (
              <Hexagongen
                key={`hex-${props.x},${props.y}`}
                x={props.x}
                y={props.y}
                columadjust={props.columadjust}
                IsOwned={false}
              />
            ))}
          </Layout>
          {/* <Pattern id="pat-1" link={`${mothership}`} /> */}
        </HexGrid>
      </div>
      <div
        style={{
          position: "fixed",

          right: 300,
          transform: "translateY(-50%)",
        }}
      >
        <button
          onClick={zoomin}
          class="btn btn-info "
          style={{ marginRight: "10px", fontSize: "40px", marginTop: "20px" }}
        >
          <img className="zoom" src={Zoomin} />
        </button>
        <button
          onClick={zoomout}
          class="btn btn-info "
          style={{ marginRight: "10px", fontSize: "40px", marginTop: "20px" }}
        >
          <img className="zoom" src={Zoomout} />
        </button>
        <button
          onClick={reset}
          class="btn btn-info"
          style={{ marginRight: "10px", fontSize: "40px", marginTop: "20px" }}
        >
          <img className="zoom" src={Reset} />
        </button>
      </div>
    </div>
  );
}
