import React from "react";
import SelectPlayerPage from "../Page/SelectPlayerPage";
import { useNavigate } from "react-router-dom";

// const playerData = (props) => {
//   const name = players[index].name;
//   return players[index].name;
// };

export default function Status() {
  return (
    <div
      style={{
        backgroundColor: "blue",
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
          fontSize: "50px",
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
        name:
        <br />
        budget:$
        <br />
        region(s):num
      </div>
    </div>
  );
}
