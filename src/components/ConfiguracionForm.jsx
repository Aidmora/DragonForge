import React from 'react'
import './css/FormularioRegistro.css';
function ConfiguracionForm({
  nombre,
  email,
  contrasenia,
  telefono,
  error,
  setNombre,
  submitting,
  setEmail,
  setContrasenia,
  setTelefono,
  handleSubmit
}) {

return (
    <form onSubmit={handleSubmit} className="registro-form" noValidate>
      <label className="registro-label">
        Nombre completo
        <input
          type="text"
          className="registro-input"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
      </label>

      <label className="registro-label">
        Email
        <input
          type="email"
          className="registro-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="registro-label">
        Contraseña
        <input
          type="password"
          className="registro-input"
          value={contrasenia}
          onChange={e => setContrasenia(e.target.value)}
          minLength={8}            
          required
        />
      </label>

      <label className="registro-label">
        Teléfono
        <input
          type="tel"
          className="registro-input"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
          required
        />
      </label>

      {error && <p className="registro-error">{error}</p>}

      <button
        type="submit"
        className="registro-button"
        disabled={submitting}     
      >
        {submitting ? 'Registrando…' : 'Registrarse'}
      </button>
    </form>
  );
}

export default ConfiguracionForm