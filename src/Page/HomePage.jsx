import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Client } from "@stomp/stompjs";
import Upbeat from "./upbeat.png";

export default function HomePage() {
  let client;
  const navigate = useNavigate();
  const [isStart, setIsStart] = useState(false);
  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/topic/GameStart", (message) => {
            const body = JSON.parse(message.body);
            setIsStart(body);
          });
        },
      });
      client.activate();
    }
  }, []);
  useEffect(() => {
    if (isStart) navigate("/Player");
  });

  const checkStart = () => {
    navigate("/Player");
    return;
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/app/GameStart",
        });
      } else {
        alert("Server not starting yet.");
      }
    }
  };
  return (
    <div style={{ textAlign: "center", height: "100vh" }}>
      <div>
        <h1
          className="Topic"
          style={{ transform: "scale(0.6)", height: "50vh" }}
        >
          <img src={Upbeat} />
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <div class="d-grid gap-5 mx-auto" style={{ minHeight: "0%" }}>
            <button
              class="btn btn-primary"
              type="button"
              style={{ fontSize: "10vh" }}
              onClick={checkStart}
            >
              Start Game
            </button>

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
