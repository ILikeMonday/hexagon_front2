import React, { useEffect } from "react";
import SelectPlayerPage from "../Page/SelectPlayerPage";
import { useNavigate } from "react-router-dom";
import { Client } from "@stomp/stompjs";
let client;
// const playerData = (props) => {
//   const name = players[index].name;
//   return players[index].name;
// };
let name_player = 0;
let money = 0;
let num = 0;

export default function Status() {
  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/app/GetStatus", (message) => {
            const body = JSON.parse(message.body);
            console.log(body);
          });
          client.subscribe("/topic/GetStatus", (message) => {
            const body = JSON.parse(message.body);
            console.log(body);
          });
        },
      });
      client.activate();
    }
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#004A9E",
        padding: "20px",
        borderRadius: "40px",
        width: "80%",

        justifyContent: "center",
      }}
    >
      <h1
        style={{
          marginTop: "0px",
          marginBottom: "10px",
          color: "#fff",
          fontSize: "40px",
        }}
      >
        Status
      </h1>

      <div
        style={{
          marginTop: "10px",
          color: "#fff",
        }}
      >
        name:{name_player}
        <br />
        budget:{money}
        <br />
        region(s):{num}
      </div>
    </div>
  );
}
