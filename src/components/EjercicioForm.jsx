import React, { useState } from "react";
import { crearEjercicio } from "../services/ejercicios";
import "./css/NuevoEjercicioForm.css"; 
export default function EjercicioForm({ onCreated }) {
  const [form, setForm] = useState({
    nombre: "",
    dificultad: "",
    grupo_muscular: "",
    equipamiento: "",
    instrucciones: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const payload = {
        nombre: form.nombre,
        dificultad: form.dificultad,
        grupo_muscular: form.grupo_muscular.split(",").map((s) => s.trim()),
        equipamiento: form.equipamiento.split(",").map((s) => s.trim()),
        instrucciones: form.instrucciones,
      };
      await crearEjercicio(payload);
      setForm({
        nombre: "",
        dificultad: "",
        grupo_muscular: "",
        equipamiento: "",
        instrucciones: "",
      });
      onCreated();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="nuevo-form">
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="dificultad">Dificultad</label>
        <input
          id="dificultad"
          name="dificultad"
          value={form.dificultad}
          onChange={handleChange}
          placeholder="Dificultad"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="grupo_muscular">
          Grupo muscular (separados por coma)
        </label>
        <input
          id="grupo_muscular"
          name="grupo_muscular"
          value={form.grupo_muscular}
          onChange={handleChange}
          placeholder="Ej: pecho, espalda"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="equipamiento">Equipamiento (separados por coma)</label>
        <input
          id="equipamiento"
          name="equipamiento"
          value={form.equipamiento}
          onChange={handleChange}
          placeholder="Ej: mancuernas, banco"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="instrucciones">Instrucciones</label>
        <textarea
          id="instrucciones"
          name="instrucciones"
          value={form.instrucciones}
          onChange={handleChange}
          placeholder="Describe cómo realizar el ejercicio"
          required
        />
      </div>

      <button type="submit" disabled={saving}>
        {saving ? "Guardando…" : "Crear ejercicio"}
      </button>

      {error && <p className="error">Error: {error}</p>}
    </form>
  );
}
