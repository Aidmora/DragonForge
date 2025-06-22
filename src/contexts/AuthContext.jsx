// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser, getUsuarioPorId } from "../services/usuarios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) {
      getUsuarioPorId(storedId)
        .then((u) => setUser(u))
        .catch(() => localStorage.removeItem("userId"))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async ({ email, contrasenia }) => {
    setLoading(true);
    const u = await loginUser({ email, contrasenia });
    setUser(u);
    localStorage.setItem("userId", u.id);
    setLoading(false);
    if (!u.info_fenotipica_completa) {
      navigate("/encuesta");
    } else {
      navigate("/ejercicios");
    }
  };

  const register = async (datos) => {
    setLoading(true);
    const u = await registerUser(datos);
    setUser(u);
    localStorage.setItem("userId", u.id);
    setLoading(false);
    navigate("/login");

  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userId");
    navigate("/ejercicios");
  };

  return (
    <AuthContext.Provider value={{ user,setUser,loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
