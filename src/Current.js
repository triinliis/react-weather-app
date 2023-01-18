import React from "react";

export default function Current() {
  return (
    <div className="Search">
      <ul className="maintext">
        <li>
          <span
            className="temp"
            id="currenttemperature"
            style={{ color: "white" }}
          >
            {" "}
            -2°
          </span>
          <button
            className="thing"
            onClick={() => this.setState({ showSomething: true })}
          >
            °C
          </button>
          |
          <button
            className="thing"
            onClick={() => this.setState({ showSomething: true })}
          >
            °F
          </button>
        </li>
        <li>
          <span
            className="current-weather"
            id="description"
            style={{ color: "white" }}
          >
            {" "}
            Cloudy{" "}
          </span>
        </li>
        <br />
        <li className="currentime" style={{ color: "white" }}>
          Sunday, Dec 5
        </li>
      </ul>
    </div>
  );
}
