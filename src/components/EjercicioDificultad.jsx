// src/components/EjercicioDificultad.jsx
import React from "react";
import "./css/Dificultad.css";

export default function EjercicioDificultad({ value, onChange, required }) {
  const opciones = [
    { key: "option-1",    label: "Principiante",  val: "principiante" },
    { key: "option-2",    label: "Intermedio",    val: "intermedio" },
    { key: "option-3",    label: "Avanzado",      val: "avanzado" },
  ];

  const handleSelect = (val) => {
    onChange({
      target: { name: "dificultad", value: val }
    });
  };

  return (
    <div className="select">
      <div
        className="selected"
        data-one="Principiante"
        data-two="Intermedio"
        data-three="Avanzado"
      >
        <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      class="arrow"
    >
      <path
        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
      ></path>
    </svg>
      </div>
      <div className="options">
        {opciones.map(({ key, label, val }) => (
          <div key={key} title={key}>
            <input
              id={key}
              name="option"
              type="radio"
              value={val}
              checked={value === val}
              required={required && val === ""}
              onChange={() => handleSelect(val)}
            />
            <label
              className="option"
              htmlFor={key}
              data-txt={label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
