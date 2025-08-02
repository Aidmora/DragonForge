// src/components/EjercicioCard.jsx
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./css/EjercicioCard.css";

export default function EjercicioCard({ ejercicio }) {
  const [expanded, setExpanded] = useState(false);
  const grupos = Array.isArray(ejercicio.grupo_muscular)
    ? ejercicio.grupo_muscular
    : [];
  const equipos = Array.isArray(ejercicio.equipamiento)
    ? ejercicio.equipamiento
    : [];

  return (
    <div
      className={`card ${expanded ? "expanded" : ""}`}
      style={{ background: "beige" }}
    >
      <div className="row align-items-center">
        <div className="col-4">
          <div className="card-avatar">
            <img src={ejercicio.imagen_url} alt={ejercicio.nombre} />
          </div>
        </div>
        <div className="col-8">
          <div className="card-content">
            <h3 className="card-title">{ejercicio.nombre}</h3>
            {!expanded && (
              <div className="compact-info">
                <p>Dificultad: {ejercicio.dificultad}</p>
                <p>Grupo Muscular: {grupos.join(", ")}</p>
              </div>
            )}
            {expanded && (
              <div className="card-details">
                <p>
                  <strong>Dificultad:</strong> {ejercicio.dificultad}
                </p>
                <p>
                  <strong>Grupo muscular:</strong> {grupos.join(", ")}
                </p>
                <p>
                  <strong>Equipamiento:</strong> {equipos.join(", ")}
                </p>
                <p>
                  <strong>Instrucciones:</strong> {ejercicio.instrucciones}
                </p>
              </div>
            )}
            <div className="card-actions">
              <button
                className="btn-detalles"
                onClick={() => setExpanded((e) => !e)}
              >
                {expanded ? "Ocultar" : "Detalles"}
              </button>
              <FaHeart className="icon-heart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
