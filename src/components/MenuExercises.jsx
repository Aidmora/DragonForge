import React from "react";
import "./css/MenuExercises.css";

export default function MenuExercises({ selected, onSelect }) {
  const buttons = [
    { id: "listado",       label: "Listado" },
    { id: "nuevo",         label: "Nuevo" },
    { id: "dificultad",    label: "Dificultad" },
    { id: "equipamiento",  label: "Equipamiento" },
    { id: "grupo",         label: "Grupo muscular" },
  ];

  return (
    <div className="button-container">
      {buttons.map(b => (
        <button
          key={b.id}
          className={`button ${selected === b.id ? "active" : ""}`}
          onClick={() => onSelect(b.id)}
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}
