import CodeEditor from "@uiw/react-textarea-code-editor";
import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

const Construction = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const handleEditorChange = (value) => {
    setValue(value);
    // onChange("code", value);
  };
  const checkingtype = () => {
    console.log(value);
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
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
    if (timer === "00:00:00") {
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
    <div style={{ position: "sticky", top: "20px" }}>
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
          margin: "0 auto",
          fontSize: "50px",
          padding: "10px 20px",
          color: "#3E9DDE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>{timer}</h2>
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
          height="85vh"
          width={`80%`}
          language={language || "javascript"}
          value={value}
          theme="vs-dark"
          defaultValue="// some comment"
          onChange={(e) => handleEditorChange(e)}
        />
      </div>
      <button
        onClick={checkingtype}
        class="btn btn-primary"
        style={{
          fontSize: "15px",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Done ➠
      </button>
    </div>
  );
};

export default Construction;
