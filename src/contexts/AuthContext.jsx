// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser, getUsuarioPorId } from '../services/usuarios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Al montar, podrías restorear un userId de localStorage y cargar perfil:
  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (!storedId) return;
    setLoading(true);
    getUsuarioPorId(storedId)
      .then(u => setUser(u))
      .catch(() => localStorage.removeItem('userId'))
      .finally(() => setLoading(false));
  }, []);

  const login = async ({ email, contrasenia }) => {
    const u = await loginUser({ email, contrasenia });
    setUser(u);
    localStorage.setItem('userId', u.id);
    navigate('/encuesta');
  };

  const register = async datos => {
    const u = await registerUser(datos);
    // tras registrarse, lo logueamos automáticamente:
    setUser(u);
    localStorage.setItem('userId', u.id);
    navigate('/encuesta');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
