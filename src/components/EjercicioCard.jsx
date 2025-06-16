// src/components/EjercicioCard.jsx
import React from "react";
import "./css/EjercicioCard.css"; // Asegúrate de tener este archivo CSS para estilos
function EjercicioCard({ ejercicio }) {
  return (
    <div className="card">
  <div className="overlay" />
  <div className="card-content">
    <div className="nombreEjercicio">
      <h3>{ejercicio.nombre}</h3>
    </div>
    <div className="ejerciciosCarac">
      <p><strong>Dificultad:</strong> {ejercicio.dificultad}</p>
      <p><strong>Grupo muscular:</strong> {ejercicio.grupo_muscular.join(', ')}</p>
      <p><strong>Equipamiento:</strong> {ejercicio.equipamiento.join(', ')}</p>
      <p><strong>Instrucciones:</strong> {ejercicio.instrucciones}</p>
    </div>
  </div>
</div>

  );
}
export default EjercicioCard;
