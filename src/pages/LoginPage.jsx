// src/pages/LoginPage.jsx
import React, { useState, useContext } from 'react';
import { NavLink }                     from 'react-router-dom';
import { AuthContext }                 from '../contexts/AuthContext';
import FormularioLogin                 from '../components/FormularioLogin';
import './css/LoginStyles.css';
import fitnessImage                    from '../assets/DragonForge.png';

export default function LoginPage() {
  const [email, setEmail]               = useState('');
  const [contrasenia, setContrasenia]   = useState('');
  const [error, setError]               = useState(null);
  const { login }                       = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login({ email, contrasenia });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-image-wrapper">
          <img src={fitnessImage} alt="Fitness" className="login-image" />
        </div>
        <div className="login-form-wrapper">
          <h2 className="form-title">Log in to DragonForge</h2>
          <FormularioLogin
            email={email}
            password={contrasenia}
            error={error}
            setEmail={setEmail}
            setPassword={setContrasenia}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
