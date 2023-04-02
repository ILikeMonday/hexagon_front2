import { Client } from "@stomp/stompjs";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Status from "../component/Status";
let client;

export default function SelectPlayerPage() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const [row, setrow] = useState(10);
  const [col, setcol] = useState(10);

  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/app/RowCol", (message) => {
            const body = JSON.parse(message.body);
            console.log(body);
            setrow(body[0]);
            setcol(body[1]);
          });
          client.subscribe("/topic/IsAdded", (message) => {
            const body = JSON.parse(message.body);
            console.log(body);
          });
        },
      });
      client.activate();
    }
  }, []);

  const SendPlayer = () => {
    const sending = [];
    for (let i = 0; i < players.length; i++) {
      sending.push(players[i].name);
    }
    console.log(sending);
    if (client) {
      if (client.connected) {
        console.log(players);
        client.publish({
          destination: "/app/AddPlayers",
          body: JSON.stringify({
            numofplayers: sending.length,
            playerlist: sending,
          }),
        });
      }
    }
  };

  useEffect(() => {
    setPlayers([]);
  }, [selectedOption]);

  const PlayerAdder = () => {
    console.log(typeof players);
    if (selectedOption === null) {
      alert("Please select an option");
    } else if (selectedOption === "custom") {
      if (players.length < 2) alert("Player should have at least 2 players");
      else if (players.length > row * col)
        alert("Too many players for the field");
      else {
        const playerData = [...Array(parseInt(selectedOption))].map(
          (_, index) => ({ name: players[index].name })
        );

        navigate("/PlayGround", { state: { players: playerData } });
      }
    } else {
      const playerData = [...Array(parseInt(selectedOption))].map(
        (_, index) => ({ name: players[index].name })
      );
      SendPlayer();
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
              onClick={(e) => {
                setPlayers(""); // Clear the players array
                setSelectedOption(2);
                setPlayers(Array(2).fill({ name: "" })); // Add 2 to the players array
                e.target.previousSibling.value = "";
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
              onClick={(e) => {
                setPlayers(""); // Clear the players array
                setSelectedOption(3);
                setPlayers(Array(3).fill({ name: "" })); // Add 3 to the players array
                e.target.previousSibling.value = "";
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
              onClick={(e) => {
                setPlayers(""); // Clear the players array
                setSelectedOption("custom");
                setPlayers(Array("custom").fill({ name: "" }));
                e.target.previousSibling.value = "";
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
              placeholder="Number of players..."
              onChange={(e) =>
                setPlayers(Array(parseInt(e.target.value)).fill({ name: "" }))
              }
              value={players.length > 0 ? players.length : ""}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  setSelectedOption(parseInt(e.target.value));
                  PlayerAdder(parseInt(e.target.value));
                  console.log(parseInt(e.target.value));
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
          </div>
        )}

        {selectedOption !== null && (
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
                    }}
                    onChange={(e) => {
                      const updatedPlayers = [...players];
                      updatedPlayers[index] = { name: e.target.value };
                      setPlayers(updatedPlayers);
                      console.log(updatedPlayers);
                    }}
                  />
                </div>
              ))}
          </div>
        )}

        <br />

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
