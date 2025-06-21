import React from "react";
import { Suspense, useState } from "react";
import MenuBar from "../components/MenuBar";
import Carousel from "../components/Carousel";
import EjerciciosList from "../components/EjerciciosList";
import EjercicioForm from "../components/EjercicioForm";
import BarraBusqueda from "../components/BarraBusqueda";
import MenuExercises from "../components/MenuExercises";
import Footer from "../components/Footer";
import "./css/Ejercicios.css";
import logo from "../assets/DragonFogeExercises.png";

export default function EjerciciosPage() {
  const [version, setVersion] = useState(0);
  const [section, setSection] = useState("listado");
  const onCreated = () => setVersion((v) => v + 1);
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
          <div className="row comD">
            <div className="barra-busqueda">
              <BarraBusqueda></BarraBusqueda>
            </div>
            <div className="menu-exercises">
              <MenuExercises
                selected={section}
                onSelect={setSection}
              ></MenuExercises>
            </div>
            <div className="contenidoEjercicios">
              {section === "listado" && (
                <>
                  <div className="row gx-6">
                    <h2>LISTADO DE EJERCICIOS</h2>
                  </div>
                  <div className="row gx-6">
                    <div className="listadoEjercicios">
                      <EjerciciosList version={version} />
                    </div>
                  </div>
                </>
              )}
              {section === "nuevo" && (
                <>
                  <div className="row gx-6">
                    <h2>Crea un nuevo ejercicio</h2>
                  </div>
                  <div className="row gx-6">
                    <div className="col-6">
                      <img src={logo} alt="" />
                    </div>
                    <div className="col-6">
                      <div className="formulario">
                        <EjercicioForm onCreated={onCreated} />
                      </div>
                    </div>
                  </div>
                </>
              )}
              {section === "dificultad" && <></>}
            </div>

            <div className="footer">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
