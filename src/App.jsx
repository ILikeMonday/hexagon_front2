import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import SelectPlayerPage from "./Page/SelectPlayerPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Player" element={<SelectPlayerPage />} />
    </Routes>
  );
}
