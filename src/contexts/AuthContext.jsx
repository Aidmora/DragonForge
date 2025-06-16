// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  loginUser,
  registerUser,
  getUsuarioPorId
} from '../services/usuarios'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Al montar: si hay userId en localStorage, recarga perfil
  useEffect(() => {
    const storedId = localStorage.getItem('userId')
    if (storedId) {
      getUsuarioPorId(storedId)
        .then(u => setUser(u))
        .catch(() => localStorage.removeItem('userId'))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  const login = async ({ email, contrasenia }) => {
    setLoading(true)
    const u = await loginUser({ email, contrasenia })
    setUser(u)
    localStorage.setItem('userId', u.id)
    setLoading(false)
    navigate('/workouts')   
  }

  const register = async datos => {
    setLoading(true)
    const u = await registerUser(datos)
    setUser(u)
    localStorage.setItem('userId', u.id)
    setLoading(false)
    navigate('/workouts') 
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('userId')
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
