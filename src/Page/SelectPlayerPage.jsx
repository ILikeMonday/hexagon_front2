import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SelectPlayerPage() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const Navigate = useNavigate();
  const row = 15;
  const col = 20;

  const PlayerAdder = () => {
    if (selectedOption === null) {
      alert("Please select an option");
    } else if (selectedOption === "custom") {
      if (Players < 2) alert("Player Should have more than 1");
      else if (Players > row * col) alert("Player Should have less than field");
      else {
        Navigate("/Playground");
      }
    } else {
      Navigate("/Playground");
    }
    setPlayers("");
  };

  const [Players, setPlayers] = useState("");

  return (
    <div>
      <p className="Topic">Number of players</p>

      <div style={{ textAlign: "center" }}>
        {!showOptions && (
          <button
            onClick={() => setShowOptions(true)}
            class="btn btn-primary"
            style={{
              fontSize: "100px",
            }}
          >
            Select an option
          </button>
        )}

        {showOptions && (
          <div>
            <button
              onClick={() => setSelectedOption(2)}
              class="btn btn-primary"
              style={{
                fontSize: "100px",
                marginRight: "20px",
              }}
            >
              2 players
            </button>
            <button
              onClick={() => setSelectedOption(3)}
              class="btn btn-primary"
              style={{
                fontSize: "100px",
                marginRight: "20px",
              }}
            >
              3 players
            </button>
            <button
              onClick={() => setSelectedOption("custom")}
              class="btn btn-primary"
              style={{
                fontSize: "100px",
                marginRight: "20px",
              }}
            >
              Custom
            </button>
          </div>
        )}

        {selectedOption === "custom" && (
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
              marginTop: "10px",
            }}
          />
        )}

        <br />

        <button
          onClick={PlayerAdder}
          class="btn btn-primary"
          style={{
            fontSize: "100px",
            marginTop: "20px",
          }}
        >
          Start game
        </button>

        <br />

        <Link to="/">
          <button
            class="btn btn-primary"
            style={{
              fontSize: "130px",
              marginTop: "20px",
            }}
          >
            Emergency exit
          </button>
        </Link>
      </div>
    </div>
  );
}
