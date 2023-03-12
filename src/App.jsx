import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import SelectPlayerPage from "./Page/SelectPlayerPage";
import HowToPlayPage from "./Page/HowToPlayPage";
import PlayGround from "./Page/PlayGround";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Player" element={<SelectPlayerPage />} />
      <Route path="/How-To-Play" element={<HowToPlayPage />} />
      <Route path="/Playground" element={<PlayGround />} />
    </Routes>
  );
}
