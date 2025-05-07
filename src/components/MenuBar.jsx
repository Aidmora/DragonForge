import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';
import logo from '../assets/DragonForge4.png';

export default function MenuBar() {
  return (
    <>
      <header className="site-header">
        <img src={logo} alt="Dragon Forge" className="logo" />
      </header>
      <nav className="site-nav">
        <ul className="barra-nav">
          <li>
            <NavLink to="/misRutinas"    className={({isActive})=> isActive ? 'active' : ''}>
              Mis rutinas
            </NavLink>
          </li>
          <li>
            <NavLink to="/misFavoritos"  className={({isActive})=> isActive ? 'active' : ''}>
              Mis favoritos
            </NavLink>
          </li>
          <li>
            <NavLink to="/workouts"      className={({isActive})=> isActive ? 'active' : ''}>
              Entrenamientos
            </NavLink>
          </li>
          <li>
            <NavLink to="/exercises"    className={({isActive})=> isActive ? 'active' : ''}>
              Ejercicios
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings"     className={({isActive})=> isActive ? 'active' : ''}>
              Configuración
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
