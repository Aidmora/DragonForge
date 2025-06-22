import React, { useState, useEffect } from 'react'
import './css/FormularioConfig.css'

export default function ConfiguracionForm({
  user,        
  error,
  submitting,
  onSubmit,      
}) {
  const [nombre, setNombre]         = useState('')
  const [email, setEmail]           = useState('')
  const [contrasenia, setContrasenia] = useState('')
  const [telefono, setTelefono]     = useState('')
  const [altura, setAltura]     = useState('')
  const [gender,   setGender]   = useState('')
  const [peso, setPeso]     = useState('')

  useEffect(() => {
    if (!user) return
    setNombre(user.nombre || '')
    setEmail(user.email || '')
    setContrasenia('') 
    setTelefono(user.telefono || '')
    setAltura(user.altura|| '')
    setPeso(user.peso|| '')
    setGender(user.sexo|| '')
  }, [user])

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ nombre, email, telefono,contrasenia,peso,altura, gender})
  }

  return (
    <form onSubmit={handleSubmit} className="actualizar-form" noValidate>
      <label className="actualizar-label">
        Nombre completo
        <input
          type="text"
          className="actualizar-input"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
      </label>

      <label className="actualizar-label">
        Email
        <input
          type="email"
          className="actualizar-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="actualizar-label">
        Contraseña
        <input
          type="password"
          className="actualizar-input"
          value={contrasenia}
          onChange={e => setContrasenia(e.target.value)}
          minLength={8}
          required
        />
      </label>

      <label className="actualizar-label">
        Teléfono
        <input
          type="tel"
          className="actualizar-input"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
          required
        />
      </label>
      <label className="actualizar-label">
        Altura (cm)
        <input
          type="text"
          className="actualizar-input"
          value={altura}
          onChange={e => setAltura(e.target.value)}
          required
        />
      </label>
      <label className="actualizar-label">
        Peso (Kg)
        <input
          type="text"
          className="actualizar-input"
          value={peso}
          onChange={e => setPeso(e.target.value)}
          required
        />
      </label>
      <div className="encuesta-group">
        <label className="actualizar-label">Sexo</label>
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
      {error && <p className="actualizar-error">{error}</p>}

      <div className="form-buttons">
        <button type="submit" className="actualizar-button" disabled={submitting}>
          {submitting ? 'Actualizando…' : 'Actualizar'}
        </button>
      </div>
    </form>
  )
}
