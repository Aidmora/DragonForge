import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';
import logo from '../assets/DragonForge.png';

export default function MenuBar() {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav">
          <img src={logo} alt="Dragon Forge" className="logo" />
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
              Rutinas 
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
      </header>
      
    </>
  );
}
