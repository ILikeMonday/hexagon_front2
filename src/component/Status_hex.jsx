import React from "react";

export default function Status_hex() {
  return (
    <div
      style={{
        backgroundColor: "#004A9E",
        padding: "20px",
        borderRadius: "40px",
      }}
    >
      <h1
        style={{
          marginLeft: "0%",
          marginTop: "0px",
          width: "30%",
          color: "#fff",
          fontSize: "40px",
        }}
      >
        Status_hexagon
      </h1>
      <div
        style={{
          marginLeft: "10%",
          marginTop: "10px",
          width: "80%",
          color: "#fff",
        }}
      >
        position:[x,y]
        <br />
        owner:name/unknown
        <br />
        deposit:num/unknown
      </div>
    </div>
  );
}
