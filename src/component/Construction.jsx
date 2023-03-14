import CodeEditor from "@uiw/react-textarea-code-editor";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const Construction = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div>
      <h1
        style={{
          margin: "0 auto",
          fontSize: "50px",
          padding: "10px 20px",
          color: "#3E9DDE",
        }}
      >
        Build your Constrution plan
      </h1>

      <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
        <Editor
          height="85vh"
          width={`100%`}
          language={language || "javascript"}
          value={value}
          theme={theme}
          defaultValue="// some comment"
          onChange={handleEditorChange}
        />
      </div>
      <button
        style={{ margin: "0 auto", fontSize: "25px", padding: "10px 20px" }}
      >
        Next ➠
      </button>
    </div>
  );
};

export default Construction;
