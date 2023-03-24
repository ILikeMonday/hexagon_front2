import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SelectPlayerPage() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const row = 15;
  const col = 20;

  const handleNameChange = (index, event) => {
    const newPlayers = [...players];
    newPlayers[index].name = event.target.value;
    setPlayers(newPlayers);
  };

  const PlayerAdder = () => {
    if (selectedOption === null) {
      alert("Please select an option");
    } else if (selectedOption === "custom") {
      if (players.length < 2) alert("Player should have at least 2 players");
      else if (players.length > row * col)
        alert("Too many players for the field");
      else {
        navigate("/PlayGround", { state: { players } });
      }
    } else {
      const playerData = [...Array(parseInt(selectedOption))].map(
        (_, index) => ({ name: players[index].name })
      );
      navigate("/PlayGround", { state: { players: playerData } });
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
                setPlayers(Array(2).fill({ name: "" })); // Add 2 to the players array
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
                setPlayers(Array(3).fill({ name: "" })); // Add 3 to the players array
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
              onClick={() => {
                setSelectedOption("custom");
                setPlayers([{ name: "" }]);
              }}
              className="btn btn-primary"
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
          <div>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]+"
              placeholder="players amount..."
              onChange={(e) =>
                setPlayers(Array(parseInt(e.target.value)).fill({ name: "" }))
              }
              value={players.length > 0 ? players.length : ""}
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
            {players.slice(0, players.length).map((player, index) => (
              <div key={index}>
                <label
                  htmlFor={`player-${index}`}
                  style={{
                    fontSize: "5vh",
                    marginRight: "10px",
                    color: "aqua",
                  }}
                >
                  Player {index + 1} name:
                </label>
                <input
                  type="text"
                  id={`player-${index}`}
                  placeholder={`Player ${index + 1} name...`}
                  style={{
                    fontSize: "5vh",
                    padding: "10px",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                  value={player.name}
                  onChange={(e) => handleNameChange(index, e)}
                />
              </div>
            ))}
          </div>
        )}

        {selectedOption !== "custom" && selectedOption !== null && (
          <div>
            {Array(selectedOption)
              .fill()
              .map((_, index) => (
                <div key={index}>
                  <label
                    htmlFor={`player-${index}`}
                    style={{
                      fontSize: "5vh",
                      marginRight: "10px",
                      marginBottom: "10px",
                      color: "aqua",
                    }}
                  >
                    Player {index + 1} name:
                  </label>
                  <input
                    type="text"
                    id={`player-${index}`}
                    placeholder={`Player ${index + 1} name...`}
                    style={{
                      fontSize: "5vh",
                      padding: "10px",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                    onChange={(e) => {
                      const updatedPlayers = [...players];
                      updatedPlayers[index] = { name: e.target.value };
                      setPlayers(updatedPlayers);
                    }}
                  />
                </div>
              ))}
          </div>
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
