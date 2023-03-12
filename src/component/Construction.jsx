import React from "react";

const Construction = () => {
  return (
    <div>
      <h1
        style={{
          margin: "0 auto",
          fontSize: "50px",
          padding: "10px 20px",
          color: "#3E9DDE",
        }}
      >
        Build your Constrution plan
      </h1>
      <h1></h1>
      <div>
        <textarea type="text"></textarea>
      </div>
      <button
        style={{ margin: "0 auto", fontSize: "25px", padding: "10px 20px" }}
      >
        Next ➠
      </button>
    </div>
  );
};

export default Construction;
