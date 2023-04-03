import React, { useEffect } from "react";
import SelectPlayerPage from "../Page/SelectPlayerPage";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

// const playerData = (props) => {
//   const name = players[index].name;
//   return players[index].name;
// };
let name_player = 0;
let money = 0;
let num = 0;

const Status = (props) => {
  const { name, budget, len } = props;
  const playername = name;
  const amountRegion = len;

  return (
    <div
      style={{
        backgroundColor: "#004A9E",
        padding: "20px",
        borderRadius: "40px",
        width: "80%",

        justifyContent: "center",
      }}
    >
      <h1
        style={{
          marginTop: "0px",
          marginBottom: "10px",
          color: "#fff",
          fontSize: "40px",
        }}
      >
        Status
      </h1>
      <div
        style={{
          marginTop: "10px",
          color: "#fff",
        }}
      >
        {`name: ${playername}`}
        <br />
        {`budget: ${budget} $`}
        <br />
        {`region(s): ${amountRegion}`}
      </div>
    </div>
  );
};

export default Status;
