import React, { useState } from "react";

// export default Select;
function Select({ onNext }) {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext(name);
  };

  return (
    <div style={{ color: "#3E9DDE", fontSize: "50px" }}>
      <h1>What's your name?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            style={{
              margin: "0 auto",
              fontSize: "30px",
              padding: "10px 20px",
            }}
          />
        </label>
        <br />
        <button
          type="submit"
          style={{ margin: "0 auto", fontSize: "10px", padding: "10px 20px" }}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Select;
