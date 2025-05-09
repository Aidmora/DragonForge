import React from 'react';
import './Encuesta.css';
import FormularioEncuesta from '../components/FormularioEncuesta';

function Encuesta() {
  return (
    <div className="encuesta-container">
      <div className="encuesta-card">
        <header className="encuesta-header">
          <h1 className="encuesta-title">About You</h1>
        </header>
        <section className="encuesta-body">
          <FormularioEncuesta />
        </section>
      </div>
    </div>
  );
}
export default Encuesta;
