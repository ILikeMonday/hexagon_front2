import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", textAlign: "center" }}>
      <div>
        <h1 className="Topic">Upbeat!!!</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <div class="d-grid gap-5 mx-auto">
            <Link to="/Player">
              <button
                class="btn btn-primary"
                type="button"
                style={{ fontSize: "10vh" }}
              >
                Start Game
              </button>
            </Link>
            <Link to="/How-To-Play">
              <button
                class="btn btn-primary"
                type="button"
                style={{ fontSize: "10vh" }}
              >
                How to play
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
