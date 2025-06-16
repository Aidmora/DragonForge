// src/components/Protected.jsx
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function Protected({ children }) {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <div role="status">Cargando…</div>
  }
  if (!user) {
    return <Navigate to="/login" replace />
  }
  return <>{children}</>
}
