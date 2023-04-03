import "./App.css";
import "./component/Hexagon.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import SelectPlayerPage from "./Page/SelectPlayerPage";
import HowToPlayPage from "./Page/HowToPlayPage";
import PlayGround from "./Page/PlayGround";

import Wait_room from "./component/Wait_room";
import Victory from "./component/Victory";

window.ip = "ws://10.83.236.206:8080/demo-websocket";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Player" element={<SelectPlayerPage />} />
      <Route path="/How-To-Play" element={<HowToPlayPage />} />
      <Route path="/Playground" element={<PlayGround />} />

      <Route path="/wait_room" element={<Wait_room />} />
      <Route path="/Victory" element={<Victory />} />
    </Routes>
  );
}
