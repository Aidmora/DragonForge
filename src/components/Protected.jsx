// src/components/Protected.jsx
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import Spinner from './Spinner'

export default function Protected({ children }) {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <div role="status"><Spinner message="Cargando..." className="Spinner" ></Spinner></div>
  }
  if (!user) {
    return <Navigate to="/login" replace />
  }
  return <>{children}</>
}
