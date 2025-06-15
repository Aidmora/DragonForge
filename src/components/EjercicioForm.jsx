// src/components/NuevoEjercicioForm.jsx
import React, { useState } from 'react';
import { crearEjercicio }   from '../services/ejercicios';

export default function NuevoEjercicioForm({ onCreated }) {
  const [form, setForm]     = useState({
    nombre: '',
    dificultad: '',
    grupo_muscular: '',
    equipamiento: '',
    instrucciones: ''
  });
  const [saving, setSaving] = useState(false);
  const [error, setError]   = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      // convertimos strings separados por comas en array
      const payload = {
        nombre: form.nombre,
        dificultad: form.dificultad,
        grupo_muscular: form.grupo_muscular.split(',').map(s => s.trim()),
        equipamiento:   form.equipamiento.split(',').map(s => s.trim()),
        instrucciones: form.instrucciones
      };
      await crearEjercicio(payload);
      setForm({
        nombre: '',
        dificultad: '',
        grupo_muscular: '',
        equipamiento: '',
        instrucciones: ''
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
      <input
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        name="dificultad"
        value={form.dificultad}
        onChange={handleChange}
        placeholder="Dificultad"
        required
      />
      <input
        name="grupo_muscular"
        value={form.grupo_muscular}
        onChange={handleChange}
        placeholder="Grupo muscular (separados por coma)"
        required
      />
      <input
        name="equipamiento"
        value={form.equipamiento}
        onChange={handleChange}
        placeholder="Equipamiento (separados por coma)"
        required
      />
      <textarea
        name="instrucciones"
        value={form.instrucciones}
        onChange={handleChange}
        placeholder="Instrucciones"
        required
      />
      <button type="submit" disabled={saving}>
        {saving ? 'Guardando…' : 'Crear ejercicio'}
      </button>
      {error && <p className="error">Error: {error}</p>}
    </form>
  );
}
