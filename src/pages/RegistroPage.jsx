import React, { useState, useContext } from 'react';
import { AuthContext }                 from '../contexts/AuthContext';
import FormularioRegistro              from '../components/FormularioRegistro';
import './css/RegistroStyles.css';
import fitnessImage                    from '../assets/DragonForge.png';

export default function RegistroPage() {
  const [nombre, setNombre]           = useState('');
  const [email, setEmail]             = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [telefono, setTelefono]       = useState('');
  const [error, setError]             = useState(null);
  const [submitting, setSubmitting]   = useState(false);  
  const { register }                  = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('El correo debe contener un “@”');
      return;
    }
    if (contrasenia.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    setError(null);
    setSubmitting(true); 
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
      setError(err.message);
      
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-content">
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
            setSubmitting={submitting}
            setContrasenia={setContrasenia}
            setTelefono={setTelefono}
            handleSubmit={handleSubmit}
          />

        </div>
        <div className="registro-image-wrapper">
          <img src={fitnessImage} alt="Fitness" className="registro-image" />
        </div>
      </div>
    </div>
  );
}
