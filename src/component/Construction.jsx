import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import Status from "./Status";
import Status_hex from "./Status_hex";
import { Client } from "@stomp/stompjs";
import Turn from "./Turn";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link, useNavigate } from "react-router-dom";

let client;
export default function Construction({
  playername,
  budget,
  amountRegion,
  IsParseSucc,
}) {
  const [stoptime, setStoptime] = useState(false);
  const [value, setValue] = useState("t=2");
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const handleEditorChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: window.ip,
      });
      client.activate();
    }
  }, []);

  const checkingtype = () => {
    if (client) {
      if (client.connected) {
        console.log(value);

        client.publish({
          destination: "/app/ParseMsg",
          body: JSON.stringify({
            code: value,
          }),
        });
      }
    }
  };

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      if (client) {
        if (client.connected) {
          client.publish({
            destination: "/app/Status",
          });
        }
      }
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
    if (total === 0) {
      console.log(value);
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:10");
    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      if (stoptime === true) return;
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 10);

    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <div className="right-div">
      <h1
        style={{
          margin: "0 auto",
          fontSize: "50px",
          padding: "10px 20px",
          color: "#3E9DDE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Build your Constrution plan
      </h1>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "220px",
          fontSize: "50px",
          padding: "10px 20px",
          color: "#3E9DDE",
        }}
      >
        <div style={{ marginRight: "auto" }}>
          <Turn />
        </div>
        <div style={{ marginLeft: "auto" }}>
          <h2>{timer}</h2>
        </div>
      </div>

      <div
        className=" d-flex"
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Editor
          height="35vh"
          width={`80%`}
          value={value}
          theme="vs-dark"
          defaultValue="// some comment"
          onChange={(e) => handleEditorChange(e)}
        />
      </div>
      {/* <button
        onClick={checkingtype}
        class="btn btn-primary"
        style={{
          fontSize: "15px",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "50%",
          border: "3px solid green",
        }}
      >
        Sent plan ➠
      </button> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Popup
          trigger={
            <button
              class="btn btn-primary"
              style={{
                fontSize: "15px",
                padding: "10px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                width: "25%",
                border: "3px solid red",
                marginLeft: "200px",
                marginTop: "10px",
              }}
            >
              use previous plan
            </button>
          }
          position="left center"
        >
          {() => (
            <div className="model">
              <div
                className="content"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Use previous plan?
              </div>
              <div>
                <Link to="/wait_room">
                  <button
                    class="btn btn-primary"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                    }}
                    onClick={checkingtype}
                  >
                    Confirm
                  </button>
                </Link>
              </div>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button
              class="btn btn-primary"
              style={{
                fontSize: "15px",
                padding: "10px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                width: "20%",
                border: "3px solid green",
                marginLeft: "-170px",
                marginTop: "10px",
              }}
            >
              Sent plan ➠
            </button>
          }
          position="right center"
        >
          {() => (
            <div className="model">
              <div
                className="content"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Use this construction?
              </div>
              <div>
                <Link to="/wait_room">
                  <button
                    class="btn btn-primary"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                    }}
                    onClick={checkingtype}
                  >
                    Confirm
                  </button>
                </Link>
              </div>
            </div>
          )}
        </Popup>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%",
          marginLeft: "120px",
          height: "30vh",
        }}
      >
        <Status
          style={{ marginRight: "80px" }}
          name={playername}
          budget={budget}
          len={amountRegion}
        />

        <Status_hex />
      </div>
    </div>
  );
}
