import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import "../pages/css/Configuracion.css";
import { AuthContext } from "../contexts/AuthContext";
import ConfiguracionForm from "../components/ConfiguracionForm";
import BotonAtras from "../components/BotonAtras";
import logo from "../assets/DragonForge.png";
import { updateUsuario } from "../services/usuarios";
import Spinner from "../components/Spinner";

function ConfiguracionPage() {
  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);
  const [seccion, setSeccion] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const menuItems = [
    {
      key: "perfil",
      label: "Editar perfil",
      onClick: () => setSeccion("perfil"),
      component: (
        <ConfiguracionForm
          user={user}
          error={error}
          submitting={update}
          onSubmit={async (datos) => {
            const payload = {
              nombre: datos.nombre,
              email: datos.email,
              telefono: datos.telefono,
              contrasenia: datos.contrasenia,
              peso: datos.peso,
              altura: datos.altura,
              sexo: datos.gender, 
              estado_registro: user.estado_registro,
              info_fenotipica_completa: user.info_fenotipica_completa,
            };
            setError(null);
            setUpdate(true);
            try {
              await updateUsuario(user.id, payload);
              setUser((u) => ({ ...u, ...payload }));
              setShowPopup(true);
            } catch (err) {
              setError(err.message);
            }finally{
              setUpdate(false);
            }
          }}
        />
      ),
    },
    {
      key: "pref",
      label: "Preferencias",
      onClick: () => setSeccion("pref"),
      component: <Spinner message="Continuamos implementando..." className="Spinner"></Spinner>
    },
    {
      key: "notif",
      label: "Notificaciones",
      onClick: () => setSeccion("notif"),
      component: <Spinner message="Continuamos implementando..." className="Spinner"></Spinner>
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
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup">
            <img src={logo} alt="Dragon Forge" className="popup-logo" />
            <p>¡Perfil actualizado con éxito!</p>
            <button onClick={() => setShowPopup(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfiguracionPage;
