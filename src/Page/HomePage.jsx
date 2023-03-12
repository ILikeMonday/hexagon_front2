import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <h1 className="Topic">Upbeat</h1>
        {/* <Link to="/"></Link> */}
        <Link to="/Player">
          <button
            className="d-grid gap-2 col-6 mx-auto btn btn-primary"
            style={{ marginTop: "10vh", fontSize: "10vh" }}
          >
            Play
          </button>
        </Link>
      </div>
    </div>
  );
}
