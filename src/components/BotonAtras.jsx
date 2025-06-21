import React from "react";
import "../components/css/BotonAtras.css";

export default function BotonAtras({ onClick }) {
  return (
    <button className="boton-atras" onClick={onClick}>
      ← Atrás
    </button>
  );
}
