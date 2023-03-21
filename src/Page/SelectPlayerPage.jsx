import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SelectPlayerPage() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [players, setPlayers] = useState([]);
  const Navigate = useNavigate();
  const row = 15;
  const col = 20;

  const PlayerAdder = () => {
    if (selectedOption === null) {
      alert("Please select an option");
    } else if (selectedOption === "custom") {
      if (players < 2) alert("Player Should have more than 1");
      else if (players > row * col) alert("Player Should have less than field");
      else {
        const playerData = [];
        for (let i = 0; i < players[0]; i++) {
          const playerName = prompt(`Enter name for player ${i + 1}:`);

          playerData.push({ name: playerName });
        }
        Navigate("/PlayGround", { state: { players: playerData } });
      }
    } else {
      const playerData = [];
      for (let i = 0; i < selectedOption; i++) {
        const playerName = prompt(`Enter name for player ${i + 1}:`);

        playerData.push({ name: playerName });
      }
      Navigate("/PlayGround", { state: { players: playerData } });
    }
    setPlayers([]);
  };

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
              onClick={() => {
                setSelectedOption(2);
                setPlayers([...players, 2]); // Add 2 to the players array
              }}
              class="btn btn-primary"
              style={{
                fontSize: "100px",
                marginRight: "20px",
              }}
            >
              2 players
            </button>
            <button
              onClick={() => {
                setSelectedOption(3);
                setPlayers([...players, 3]); // Add 3 to the players array
              }}
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
            onChange={(e) => setPlayers([parseInt(e.target.value)])}
            value={players.length > 0 ? players[0] : ""}
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
