// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin } from '../services/auth';
import { getProfile } from '../services/user';    // <-- Asegúrate de importarlo
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [token, setToken]     = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(!!token);
  const navigate = useNavigate();

  useEffect(() => {
    // Si no hay token, terminamos el loading y listo
    if (!token) {
      setLoading(false);
      return;
    }

    // Si hay token, hacemos bootstrap del perfil
    async function bootstrap() {
      try {
        console.log('🔄 Bootstrapping profile…');
        const profile = await getProfile();
        console.log('✅ Profile loaded:', profile);
        setUser(profile);
      } catch (err) {
        console.error('❌ Bootstrap failed, logging out', err);
        logout();
      } finally {
        setLoading(false);
      }
    }

    bootstrap();
  }, [token]);

  const login = async ({ email, password }) => {
    // Llamada a auth.login (mock o real según VITE_USE_MOCK)
    const { token: t, user: u } = await apiLogin({ email, password });
    // Guardar token y user de inmediato
    setToken(t);
    setUser(u);
    localStorage.setItem('token', t);
    // Redirigir
    navigate('/encuesta');
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
