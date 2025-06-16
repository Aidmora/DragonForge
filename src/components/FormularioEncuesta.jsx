// src/components/FormularioEncuesta.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/FormularioEncuesta.css'; // Asegúrate de que la ruta sea correcta
function FormularioEncuesta() {
  const [gender, setGender]       = useState('male');
  const [birthday, setBirthday]   = useState('');
  const [height, setHeight]       = useState('');
  const [weight, setWeight]       = useState('');
  const navigate = useNavigate();               // ① llama al hook aquí

  const handleSubmit = e => {
    e.preventDefault();
    // guardado de datos ... funcionalidad (añadir)
    navigate('/workouts');                      
  };

  return (
    <form onSubmit={handleSubmit} className="encuesta-form">
      <div className="encuesta-group">
        <label>Gender</label>
        <div className="gender-toggle">
          {['female','male','other'].map(option => (
            <button
              type="button"
              key={option}
              className={gender === option ? 'active' : ''}
              onClick={() => setGender(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="encuesta-group">
        <label>Birthday</label>
        <input
          type="date"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
        />
      </div>

      <div className="encuesta-group">
        <label>Height</label>
        <div className="input-with-unit">
          <input
            type="number"
            placeholder="cm"
            value={height}
            onChange={e => setHeight(e.target.value)}
          />
          <span>cm</span>
        </div>
      </div>
      <div className="encuesta-group">
        <label>Weight</label>
        <div className="input-with-unit">
          <input
            type="number"
            placeholder="kg"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
          <span>kg</span>
        </div>
      </div>
      <button type="submit" className="encuesta-next">
        NEXT
      </button>
    </form>
  );
}
export default FormularioEncuesta;