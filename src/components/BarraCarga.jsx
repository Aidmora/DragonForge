import React from "react";
import './css/BarraCarga.css'
function BarraCarga() {
  return (
    <div className="hacker-loader">
      <div className="loader-text">
        <span data-text="Initializing..." className="text-glitch">
          Autenticando...
        </span>
      </div>
      <div className="loader-bar">
        <div className="bar-fill"></div>
        <div className="bar-glitch"></div>
      </div>
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
}

export default BarraCarga;
