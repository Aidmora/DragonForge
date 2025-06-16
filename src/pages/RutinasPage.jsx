import React from "react";
import MenuBar from "../components/MenuBar";
import Carousel from "../components/Carousel";
import "./css/Rutinas.css";
import RedesSociales from "../components/RedesSociales";
import CardForge from "../components/CardForge";
import Footer from "../components/Footer";
export default function RutinasPage() {
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
        <div className="Footer">
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}
