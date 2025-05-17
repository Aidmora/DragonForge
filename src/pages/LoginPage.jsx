import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import FormularioLogin from '../components/FormularioLogin';
import './LoginStyles.css';
import fitnessImage from '../assets/DragonForge.png'

export default function LoginPage() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState(null);
  const { login }               = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
      await login({ email, password });
    } catch {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Columna de imagen */}
        <div className="login-image-wrapper">
          {/*<h2 className="image-title">Get Your DragonForge</h2> */}
          <img src={fitnessImage} alt="Fitness" className="login-image" />
        </div>

        {/* Columna de formulario */}
        <div className="login-form-wrapper">
          <h2 className="form-title">Log in to DragonForge</h2>
          <FormularioLogin
            email={email}
            password={password}
            error={error}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
