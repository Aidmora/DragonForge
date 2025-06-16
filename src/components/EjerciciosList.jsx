// src/components/EjerciciosList.jsx
import React, { useState, useEffect } from 'react';
import EjercicioCard from './EjercicioCard';
import { getEjercicios } from '../services/ejercicios';
import Spinner from './Spinner';
import './css/EjerciciosList.css';

export default function EjerciciosList() {
  const [ejercicios, setEjercicios] = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  useEffect(() => {
    getEjercicios()
      .then(data => setEjercicios(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) 
    return <Spinner message="Cargando ejercicios..." className="Spinner" />;

  if (error)   
    return <p>Error cargando: {error}</p>;

  if (!ejercicios.length) 
    return <p>No hay ejercicios aún.</p>;

  return (
    <div className="card-grid">
      {ejercicios.map(e => (
        <EjercicioCard key={e.id} ejercicio={e} />
      ))}
    </div>
  );
}
