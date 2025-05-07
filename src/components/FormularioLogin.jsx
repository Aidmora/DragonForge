import React from 'react';
import './FormularioStyles.css';

export default function FormularioLogin({
  email,
  password,
  error,
  setEmail,
  setPassword,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label className="login-label">
        Email
        <input
          type="email"
          className="login-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      
      <label className="login-label">
        Password
        <input
          type="password"
          className="login-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>

      {error && <p className="login-error">{error}</p>}

      <button type="submit" className="login-button">
        Continue
      </button>

      <p className="signup-text">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </form>
  );
}
