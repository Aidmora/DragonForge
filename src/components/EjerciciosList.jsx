import React, { useState, useEffect, useContext } from 'react';
import EjercicioCard from './EjercicioCard';
import { getEjercicios } from '../services/ejercicios';
import Spinner from './Spinner';
import { AuthContext } from '../contexts/AuthContext';
import './css/EjerciciosList.css';

export default function EjerciciosList() {
  const [ejercicios, setEjercicios] = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);
  const { user } = useContext(AuthContext);

useEffect(() => {
    let mounted = true;
    getEjercicios()
      .then(data => {
        if (!mounted) return;
        const creados = new Set(user?.rutinas|| []);
        const filtrados = data.filter(e => !creados.has(e.id));
        setEjercicios(filtrados);
      })
      .catch(err => {
        if (!mounted) return;
        setError(err.message);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => { mounted = false };
  }, [user]);

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
