import { useState } from "react";
import Grid from "./component/Grid.jsx";

const Menu = () => {
  return (
    <div>
      <div>
        <h1
          style={{
            alignItems: "center",
            height: "1vh",
            fontSize: "70px",
          }}
        >
          Upbeat !!!
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button
          style={{ margin: "0 auto", fontSize: "40px", padding: "10px 20px" }}
        >
          Start Game
        </button>
        <br />
        <button
          style={{ margin: "0 auto", fontSize: "40px", padding: "10px 20px" }}
        >
          How to play
        </button>
      </div>
    </div>
  );
};
export default Menu;
