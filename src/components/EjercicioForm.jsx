import React, { useState, useContext } from "react";
import { crearEjercicio }     from "../services/ejercicios";
import { updateUsuario, getUsuarioPorId}      from "../services/usuarios";
import { AuthContext }        from "../contexts/AuthContext";
import "./css/NuevoEjercicioForm.css";
import EjercicioDificultad    from "./EjercicioDificultad";
export default function EjercicioForm({ onCreated }) {
  const { user, setUser } = useContext(AuthContext);
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
      const nuevo = await crearEjercicio({
        nombre: form.nombre,
        dificultad: form.dificultad,
        grupo_muscular: form.grupo_muscular.split(",").map((s) => s.trim()),
        equipamiento: form.equipamiento.split(",").map((s) => s.trim()),
        instrucciones: form.instrucciones,
      });
      const actuales = user.rutinas || [];
      const nuevosCreados = [...actuales, nuevo.id];
      await updateUsuario(user.id, { rutinas: nuevosCreados });
      const refreshed = await getUsuarioPorId(user.id);
      setUser(refreshed);
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
        <div className="dificultad">
          <label htmlFor="dificultad">Dificultad</label>
          <div className="ejercicioDificultad">
            <EjercicioDificultad
              value={form.dificultad}
              onChange={handleChange}
              required
            />
          </div>
        </div>
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
