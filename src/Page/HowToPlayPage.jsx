import React from "react";
import { Link } from "react-router-dom";

export default function HowToPlayPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="Topic">How To Play</div>
      <Link to="/">
        <button>emergency exit</button>
      </Link>
    </div>
  );
}
