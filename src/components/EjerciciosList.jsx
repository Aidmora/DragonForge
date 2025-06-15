// src/components/EjerciciosList.jsx
import React from 'react';
import EjercicioCard from './EjercicioCard';
import { fetchRecurso } from '../utils/fetchRecurso';

function EjerciciosList({ version }) {
  const resource = React.useMemo(
    () => fetchRecurso('/api/ejercicios'),
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
