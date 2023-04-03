import { Client } from "@stomp/stompjs";
import { color } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

let client;

export default function Wait_room() {
  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: window.ip,
      });
      client.activate();
    }
  }, []);

  const getInfo = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/app/Status",
        });
      }
    }
  };

  return (
    <div color="white">
      <h1
        style={{
          color: "white",
          margin: "0 auto",
          fontSize: "100px",
          marginTop: "180px",
          padding: "50px 10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Ready for next player
      </h1>
      <Link to="/Playground">
        <button
          style={{
            fontSize: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
          class="btn btn-primary"
          onClick={getInfo}
        >
          I'm ready
        </button>
      </Link>
    </div>
  );
}
