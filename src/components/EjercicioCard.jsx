// src/components/EjercicioCard.jsx
import React from 'react';

function EjercicioCard({ ejercicio }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{ejercicio.nombre}</h3>
        <p><strong>Dificultad:</strong> {ejercicio.dificultad}</p>
        <p><strong>Grupo muscular:</strong> {ejercicio.grupo_muscular.join(', ')}</p>
        <p><strong>Equipamiento:</strong> {ejercicio.equipamiento.join(', ')}</p>
        <p><strong>Instrucciones:</strong> {ejercicio.instrucciones}</p>
      </div>
    </div>
  );
}
export default EjercicioCard;