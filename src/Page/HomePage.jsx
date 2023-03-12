import React from "react";

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
        <button
          className="d-grid gap-2 col-6 mx-auto btn btn-primary"
          style={{ marginTop: "10vh", fontSize: "10vh" }}
        >
          Play
        </button>
      </div>
    </div>
  );
}
