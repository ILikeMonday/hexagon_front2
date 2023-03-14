import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function SelectPlayerPage() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const Navigate = useNavigate();
  const row = 15;
  const col = 20;
  const PlayerAdder = () => {
    if (Players < 2) alert("Player Should have more than 1");
    else if (Players > row * col) alert("Player Should have less than field");
    else {
      Navigate("/Playground");
    }
    setPlayers("");
  };

  const [Players, setPlayers] = useState("");
  return (
    <div>
      <p className="Topic">Number of players</p>
      {/* <button onClick={handleClick}>Select an option</button> */}
      <div style={{ textAlign: "center" }}>
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]+"
          placeholder="players amount..."
          onChange={(e) => setPlayers(e.target.value)}
          value={Players}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              PlayerAdder();
            }
          }}
          style={{
            alignItems: "center",
            marginLeft: "10vh",
            marginRight: "10vh",
            minWidth: "100vh",
            textAlign: "center",
            fontSize: "10vh",
          }}
        />
        <Link to="/">
          <br />
          <button>emergency exit</button>
        </Link>
      </div>

      {/* {showOptions && (
        <div
          style={{ margin: "0 auto", fontSize: "40px", padding: "10px 20px" }}
        >
          <p>Choose one:</p>
          {options.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                name="option"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionSelect}
              />{" "}
              {option.label}
            </label>
          ))}
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )} */}
    </div>
  );
}
