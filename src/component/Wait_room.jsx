import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function Wait_room() {
  return (
    <div color="white">
      <h1
        style={{
          color: "white",
          margin: "0 auto",
          fontSize: "100px",
          marginTop: "180px",
          padding: "50px 10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Ready for next player
      </h1>
      <Link to="/Playground">
        <button
          style={{
            fontSize: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          I'm ready
        </button>
      </Link>
    </div>
  );
}
