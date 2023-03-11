import "./App.css";
import Grid from "./component/Grid.jsx";
import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Construction from "./Construction";
import Menu from "./Menu";
import { useState } from "react";
import Motion from "./Motion";
import Select from "./Select";

export default function App() {
  return (
    <div>
      <div
        className="d-flex align-items-center gap-2"
        style={{
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <Construction />
        {/* <Select /> */}
        {/* <Menu /> */}
        {/* <Constructor /> */}
      </div>
      {/* <h1>Upbeat !!!</h1>
      <div
        style={{
          justifyContent: "right",
          alignItems: "right",
          textAlign: "right",
        }}
      >
        <Motion />
      </div> */}
    </div>
  );
}
