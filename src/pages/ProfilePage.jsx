import React, { useContext } from "react";
import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { AuthContext } from "../contexts/AuthContext";
import "../pages/css/Perfil.css";
import DragonForgePerfil from "../assets/DragonForgPerfil.png"; // tu imagen de fondo

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  return (
    <div className="page-container">
      <MenuBar />
      <main className="site-main">
        <div className="Perfil">
          <div
            className="profile-hero"
            style={{ backgroundImage: `url(${DragonForgePerfil})` }}
          >
            <div className="overlay"></div>
            <Container className="profile-header text-center">
              <Image
                src={user.foto_perfil_url}
                roundedCircle
                className="profile-avatar"
              />
              <h1 className="profile-name">{user.nombre}</h1>
            </Container>
          </div>
          <Container className="profile-stats">
            <div className="stat-item">
              {/* <FaRulerVertical className="stat-icon" /> */}
              <div>
                <div className="stat-label">Altura</div>
                <div className="stat-value">
                  {user.altura ? `${user.altura} cm` : "—"}
                </div>
              </div>
            </div>
            <div className="stat-item">
              {/* <FaWeight className="stat-icon" /> */}
              <div>
                <div className="stat-label">Peso</div>
                <div className="stat-value">
                  {user.peso ? `${user.peso} kg` : "—"}
                </div>
              </div>
            </div>
            <div className="stat-item">
              {/* <FaVenusMars className="stat-icon" /> */}
              <div>
                <div className="stat-label">Sexo</div>
                <div className="stat-value">{user.sexo || "—"}</div>
              </div>
            </div>
          </Container>
        </div>
        <div className="footer">
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}
