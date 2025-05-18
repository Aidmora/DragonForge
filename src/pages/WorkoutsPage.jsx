import React from "react";
import MenuBar from "../components/MenuBar";
import Carousel from "../components/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "./Workouts.css";

export default function WorkoutsPage() {
  return (
    <div className="page-container">
      <MenuBar />
      <main className="site-main">
        <Carousel />
        <div className="container content-wrapper">
          <div className="row com">
            <div className="col-6">
              <p>Interesado en entrar a DragonForge?</p>
            </div>
            <div className="col-6">
              <button class="botonInfo">ver más</button>
            </div>
          </div>
          <div className="row comD">
            <div className="col-md-6 colm1">
              <h1>Columna 1</h1>
            </div>
            <div className="col-md-6 colm2">
              <h1>Columna 2</h1>
            </div>
          </div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="content-wrapper">© 2025 Dragon Forge</div>
      </footer>
    </div>
  );
}
