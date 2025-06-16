// src/components/Spinner.jsx
import React from "react";
import "./css/Spinner.css";

function Spinner({ message, className }) {
  return (
    <div role="status" className={`spinner-container ${className || ""}`}>
      <div id="page">
        <div id="container">
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="h3">Dragon Forge</div>
          <div id="h2">{message}</div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
