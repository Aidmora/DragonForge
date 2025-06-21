import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import "../pages/css/Configuracion.css";
import { AuthContext } from "../contexts/AuthContext";
import ConfiguracionForm from "../components/ConfiguracionForm";
import BotonAtras from "../components/BotonAtras";
function ConfiguracionPage() {
  const { user } = useContext(AuthContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);
  const nav = useNavigate();
  const [seccion, setSeccion] = useState(null);
  const menuItems = [
    {
      key: "perfil",
      label: "Editar perfil",
      onClick: () => setSeccion("perfil"),
      component: <ConfiguracionForm></ConfiguracionForm>,
    },
    {
      key: "pref",
      label: "Preferencias",
      onClick: () => setSeccion("pref"),
      //   component: <PreferenciaEntrenamiento />
    },
    {
      key: "notif",
      label: "Notificaciones",
      onClick: () => setSeccion("notif"),
      //   component: <Notificaciones />
    },
  ];

  const activo = menuItems.find((item) => item.key === seccion);
  const titulo = activo ? activo.label : "Configuración";
  return (
    <div className="page-container">
      <MenuBar />
      <main className="site-main">
        <div className="row gx-6">
          <div className="conf">
            <h2>{titulo}</h2>
          </div>
        </div>
        <div className="config-content">
          {!activo && (
            <div className="row gx-6">
              <div className="items">
                <ul className="config-list">
                  <h3>Cuenta</h3>
                  {menuItems.map(({ key, icon, label, onClick }) => (
                    <li key={key} className="config-item" onClick={onClick}>
                      <span className="icon">{icon}</span>
                      <span className="label">{label}</span>
                      <span className="chevron">›</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className="config-panel">
            {activo && (
              <>
                <BotonAtras onClick={() => setSeccion(null)}></BotonAtras>
                <div className="row">
                  ´<div className="componenteActivo">{activo.component}</div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default ConfiguracionPage;
