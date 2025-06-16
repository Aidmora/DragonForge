import React from "react";
import "./css/Spinner.css";
function Spinner() {
  return (
    <div role="status" className="spinner-container">
      <div id="page">
        <div id="container">
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="h3">Dragon Forge</div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
