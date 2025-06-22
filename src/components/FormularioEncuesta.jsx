import React, { useState, useContext } from "react";
import { useNavigate }           from "react-router-dom";
import { AuthContext }           from "../contexts/AuthContext";
import { updatePhenotipo, getUsuarioPorId}         from "../services/usuarios";
import "./css/FormularioEncuesta.css";

export default function FormularioEncuesta() {
  const { user, setUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const [gender,   setGender]   = useState(user?.sexo        || "male");
  const [Nacimiento, setNacimiento] = useState(user?.fecha_nacimiento || "");
  const [height,   setHeight]   = useState(user?.altura      || "");
  const [weight,   setWeight]   = useState(user?.peso        || "");
  const [saving,   setSaving]   = useState(false);
  const [error,    setError]    = useState(null);

const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    setSaving(true);

    try {
      await updatePhenotipo(user.id, {
        sexo: gender,
        fecha_nacimiento: Nacimiento,
        altura: Number(height),
        peso: Number(weight)
      });
      const full = await getUsuarioPorId(user.id)
      setUser(full)
      navigate("/ejercicios");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="encuesta-form">
      {error && <p className="error">Error: {error}</p>}

      <div className="encuesta-group">
        <label>Sexo</label>
        <div className="gender-toggle">
          {["Femenino","Masculino"].map(opt => (
            <button
              key={opt}
              type="button"
              className={gender === opt ? "active" : ""}
              onClick={() => setGender(opt)}
            >
              {opt.charAt(0).toUpperCase()+opt.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="encuesta-group">
        <label>Fecha de nacimiento</label>
        <input
          type="date"
          value={Nacimiento}
          onChange={e => setNacimiento(e.target.value)}
          required
        />
      </div>

      <div className="encuesta-group">
        <label>Altura (cm)</label>
        <input
          type="number"
          placeholder="cm"
          value={height}
          onChange={e => setHeight(e.target.value)}
          required
        />
      </div>

      <div className="encuesta-group">
        <label>Peso (kg)</label>
        <input
          type="number"
          placeholder="kg"
          value={weight}
          onChange={e => setWeight(e.target.value)}
          required
        />
      </div>

      <button type="submit" disabled={saving} className="encuesta-next">
        {saving ? "Guardando…" : "Siguiente"}
      </button>
    </form>
  );
}
