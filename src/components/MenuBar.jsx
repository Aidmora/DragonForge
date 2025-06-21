import React, { useContext, useState } from "react";
import { NavLink, useNavigate }       from "react-router-dom";
import { AuthContext }                from "../contexts/AuthContext";
import "./css/MenuBar.css";
import logo                           from "../assets/DragonForge.png";

export default function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const navigate         = useNavigate();
  const [hovering, setHovering] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav">
        <img
          src={logo}
          alt="Dragon Forge"
          className="logo"
          onClick={() => navigate("/ejercicios")}
        />

        {/* Links siempre centrados */}
        <ul className="barra-nav ">

          {user && (
            <>
            <li>
                <NavLink to="/misEjercicios" className={({ isActive }) => isActive ? "active" : ""}>
                  Mis Ejercicios
                </NavLink>
              </li>
              <li>
                <NavLink to="/misFavoritos" className={({ isActive }) => isActive ? "active" : ""}>
                  Mis Favoritos
                </NavLink>
              </li>
              <li>
                <NavLink to="/rutinas" className={({ isActive }) => isActive ? "active" : ""}>
                  RUTINAS
                </NavLink>
              </li>
              
              
            </>
          )}
          <li>
            <NavLink to="/ejercicios" className={({ isActive }) => isActive ? "active" : ""}>
              EJERCICIOS
            </NavLink>
          </li>
        </ul>

        <div className="spacer" />
        <ul className="barra-nav right-nav">
          {!user ? (
            <>
              <li>
                <NavLink to="/login"    className={({ isActive }) => isActive ? "active" : ""}>
                  Iniciar sesión
                </NavLink>
              </li>
              <li>
                <NavLink to="/registro" className={({ isActive }) => isActive ? "active" : ""}>
                  Registrarse
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button
                className="user-button"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={logout}
              >
                {hovering ? "Cerrar sesión" : user.nombre}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
