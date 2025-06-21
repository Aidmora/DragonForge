// src/components/MenuBar.jsx
import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink, useNavigate }       from "react-router-dom";
import { AuthContext }                from "../contexts/AuthContext";
import "./css/MenuBar.css";
import logo                           from "../assets/DragonForge.png";
import { Navbar, Nav, Image, Dropdown } from "react-bootstrap";

export default function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const navigate         = useNavigate();
  const [open, setOpen]  = useState(false);
  const dropdownRef      = useRef(null);
  useEffect(() => {
    const handler = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="site-header">
      <nav className="site-nav">
        <img
          src={logo}
          alt="Dragon Forge"
          className="logo"
          onClick={() => navigate("/ejercicios")}
        />
        <ul className="barra-nav central-nav">
          <li>
            <NavLink to="/ejercicios" className={({ isActive }) => isActive ? "active" : ""}>
              EJERCICIOS
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/misEjercicios" className={({ isActive }) => isActive ? "active" : ""}>
                  Mis Ejercicios
                </NavLink>
              </li>
              <li>
                <NavLink to="/rutinas" className={({ isActive }) => isActive ? "active" : ""}>
                  Rutinas
                </NavLink>
              </li>
              <li>
                <NavLink to="/misFavoritos" className={({ isActive }) => isActive ? "active" : ""}>
                  Mis Favoritos
                </NavLink>
              </li>
            </>
          )}
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
             <Dropdown alignRight>
            <Dropdown.Toggle
              as="div"
              className="d-flex align-items-center user-button"
            >
              <Image
                src={user.foto_perfil_url}
                roundedCircle
                className="avatar"
              />
              <span className="user-name">{user.nombre}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="menu">
              <Dropdown.Item className="menu-item" onClick={() => navigate("/profile")}>
                Cuenta
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/settings")}>
                Configuración
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>
                Cerrar sesión
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          )}
        </ul>
      </nav>
    </header>
);
}
