// src/components/EjerciciosList.jsx
import React from 'react';
import EjercicioCard from './EjercicioCard';
import { fetchRecurso } from '../utils/fetchRecurso';

function EjerciciosList({ version }) {
  const resource = React.useMemo(
    () => fetchRecurso('https://api-rest-dragon-forge.onrender.com/ejercicios'),
    [version]
  );

  const ejercicios = resource.read();  // puede lanzar la promesa o devolver datos
  return (
    <div className="card-grid">
      {ejercicios.map(e => (
        <EjercicioCard key={e.id} ejercicio={e} />
      ))}
    </div>
  );
}
export default EjerciciosList;
