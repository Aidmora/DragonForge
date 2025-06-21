import React from 'react';
import './css/Encuesta.css';
import FormularioEncuesta from '../components/FormularioEncuesta';

function EncuestaPage() {
  return (
    <div className="encuesta-container">
      <div className="encuesta-card">
        <header className="encuesta-header">
          <h1 className="encuesta-title">Sobre ti</h1>
        </header>
        <section className="encuesta-body">
          <FormularioEncuesta />
        </section>
      </div>
    </div>
  );
}
export default EncuestaPage;
