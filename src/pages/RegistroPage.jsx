// src/pages/RegistroPage.jsx
import React, { useState, useContext } from 'react';
import { AuthContext }           from '../contexts/AuthContext';
import './css/RegistroStyles.css';
import FormularioRegistro        from '../components/FormularioRegistro';
import fitnessImage              from '../assets/DragonForge.png';

export default function RegistroPage() {
  const [nombre, setNombre]     = useState('');
  const [email, setEmail]       = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError]       = useState(null);
  const { register }            = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
      await register({
        nombre,
        email,
        contrasenia,
        telefono,
        estado_registro: true,
        info_fenotipica_completa: false
      });
    } catch (err) {
      setError(err.message || 'Error al registrarse');
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-content">
        {/* formulario a la izquierda */}
        <div className="registro-form-wrapper">
          <h2 className="form-title">Regístrate en DragonForge</h2>
          <FormularioRegistro
            nombre={nombre}
            email={email}
            contrasenia={contrasenia}
            telefono={telefono}
            error={error}
            setNombre={setNombre}
            setEmail={setEmail}
            setContrasenia={setContrasenia}
            setTelefono={setTelefono}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* imagen a la derecha */}
        <div className="registro-image-wrapper">
          <img src={fitnessImage} alt="Fitness" className="registro-image" />
        </div>
      </div>
    </div>
  );
}
