import React from "react";
import MenuBar from "../components/MenuBar";
import Carousel from "../components/Carousel";
import "./Workouts.css";
import RedesSociales from "../components/RedesSociales";
import CardForge from "../components/CardForge";
import SocialMediaFoot from "../components/SocialMediaFoot";

export default function WorkoutsPage() {
  return (
    <div className="page-container">
      <MenuBar />
      <main className="site-main">
        <div className="container content-wrapper">
          <div className="row">
            <div className="col-12">
              <Carousel />
            </div>
          </div>
          <div className="row com">
            <div className="col-6">
              <p>Interesado en entrar a DragonForge?</p>
            </div>
            <div className="col-6">
              <button className="botonInfo">ver más</button>
            </div>
          </div>
          <div className="row comD">
            <div className="col-md-6 colm1">
              <section className="forge">
                <p className="forgeP">LO MEJOR EN ENTRENAMIENTO Y BIENESTAR</p>
                <h1 className="forgeTi">
                  Un entrenador de fuerza y fitness completo. Siempre a tu lado.
                </h1>
                <p className="forgeDes">
                  Dragon Forge es la plataforma digital líder en rutinas de
                  gimnasio y bienestar que ofrece contenido premium, la mayor
                  variedad de ejercicios y una comunidad activa. No necesitas
                  equipamiento especial: acceso ilimitado desde cualquier
                  dispositivo.
                </p>
                <RedesSociales></RedesSociales>
              </section>
            </div>
            <div className="col-md-6 colm2">
              <CardForge></CardForge>
            </div>
          </div>
          {/* <div className="row comT">
            <div className="col-md-6 colm1">
              <h1>Columna 1</h1>
            </div>
            <div className="col-md-6 colm2">
              <h1>Columna 2</h1>
            </div>
          </div> */}
        </div>
        <footer className="site-footer">
          <div className="footer__logo">
            <img
              src="src/assets/DragonForge.png"
              alt="Dragon Forge logo featuring a stylized dragon in a dynamic pose, surrounded by bold text Dragon Forge. The logo appears in a modern gym website footer, conveying strength and motivation."
            />
          </div>
          <div className="footer_social">
            <SocialMediaFoot></SocialMediaFoot>
          </div>
          <hr className="footer__divider"></hr>
          <div className="footer__bottom">
            <p className="footer__copyright">
              © 2025 Dragon Forge. Todos los derechos reservados.
            </p>
            <nav className="footer__links">
              <a href="#">Política de privacidad</a>
              <span className="footer__sep">|</span>
              <a href="#">Términos de uso</a>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
}
