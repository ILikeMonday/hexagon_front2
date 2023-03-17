import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Construction from "./Construction";

export default function PopupGfg() {
  return (
    <div>
      <Popup
        style={{ width: "10%", height: "10%" }}
        trigger={
          <button
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50Px",
            }}
            class="btn btn-primary"
          >
            {" "}
            Click to build your Construction{" "}
          </button>
        }
        modal
        nested
        height={`0%`}
        width={`0%`}
      >
        {(close) => (
          <div className="model">
            <div className="content">
              <Construction />
            </div>

            <button
              onClick={() => close()}
              class="btn btn-primary"
              style={{ marginTop: "5px" }}
            >
              Close modal
            </button>
          </div>
        )}
      </Popup>
    </div>
  );
}
