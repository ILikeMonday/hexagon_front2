import React from "react";
import Construction from "../component/Construction";
import HexagonGrid2 from "../component/HexagonGrid2";
import { Client } from "@stomp/stompjs";
import { useState } from "react";
import { useEffect } from "react";
let client;
export default function PlayGround() {
  const [playername, setName] = useState("");
  const [budget, setBudget] = useState(0);
  const [amountRegion, setAmountRegion] = useState(0);
  const [IsParseSucc, setIsParseSucc] = useState(false);
  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: window.ip,
        onConnect: () => {
          client.subscribe("/topic/result", (message) => {
            const body = JSON.parse(message.body);
            setIsParseSucc(body["IsOK"]);
            console.log(body);
          });
          client.subscribe("/topic/GetStatus", (message) => {
            const body = JSON.parse(message.body);
            console.log(body);
            setAmountRegion(body["regionLen"]);
            setBudget(body["budget"]);
            setName(body["playerName"]);
            console.log(playername);
            console.log(budget);
            console.log(amountRegion);
          });
        },
      });
      client.activate();
    }
  }, []);

  return (
    <div className="playground">
      <HexagonGrid2 />
      <Construction
        playername={playername}
        budget={budget}
        amountRegion={amountRegion}
        IsParseSucc={IsParseSucc}
      />
    </div>
  );
}
