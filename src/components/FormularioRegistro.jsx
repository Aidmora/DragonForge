// src/components/FormularioRegistro.jsx
import React from 'react';
import './css/FormularioRegistro.css';

export default function FormularioRegistro({
  nombre,
  email,
  contrasenia,
  telefono,
  error,
  setNombre,
  setEmail,
  setContrasenia,
  setTelefono,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit} className="registro-form">
      <div className="form-group">
        <label htmlFor="nombre" className="registro-label">Nombre completo</label>
        <input
          id="nombre"
          name="nombre"
          className="registro-input"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          placeholder="Juan Pérez"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="registro-label">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="registro-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="juan@example.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contrasenia" className="registro-label">Contraseña</label>
        <input
          id="contrasenia"
          name="contrasenia"
          type="password"
          className="registro-input"
          value={contrasenia}
          onChange={e => setContrasenia(e.target.value)}
          placeholder="••••••••"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefono" className="registro-label">Teléfono</label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          className="registro-input"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
          placeholder="0987654321"
          required
        />
      </div>

      <button type="submit" className="registro-button">
        Registrarse
      </button>

      {error && <p className="registro-error">Error: {error}</p>}
    </form>
  );
}
