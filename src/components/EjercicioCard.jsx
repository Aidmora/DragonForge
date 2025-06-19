// src/components/EjercicioCard.jsx
import React from "react";
import "./css/EjercicioCard.css";

function EjercicioCard({ ejercicio }) {
  const grupos = Array.isArray(ejercicio.grupo_muscular)
    ? ejercicio.grupo_muscular
    : [];
  const equipas = Array.isArray(ejercicio.equipamiento)
    ? ejercicio.equipamiento
    : [];
  const imagenEjercicio = ejercicio.imagen_url;
  return (
    <div
      className="card"
      style={{
        backgroundImage: imagenEjercicio ? `url(${imagenEjercicio})` : "none",
      }}>
      <div className="card-content">
        <div className="nombreEjercicio">
          <h3>{ejercicio.nombre}</h3>
        </div>
        <div className="ejerciciosCarac">
          <p>
            <strong>Dificultad:</strong> {ejercicio.dificultad}
          </p>
          <p>
            <strong>Grupo muscular:</strong> {grupos.join(", ")}
          </p>
          <p>
            <strong>Equipamiento:</strong> {equipas.join(", ")}
          </p>
          <p>
            <strong>Instrucciones:</strong> {ejercicio.instrucciones}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EjercicioCard;
