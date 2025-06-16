import React from "react";
import MenuBar from "../components/MenuBar";
import EjerciciosList from "../components/EjerciciosList";
import EjercicioForm from "../components/EjercicioForm";
import Footer from "../components/Footer";
import logo from '../assets/DragonFogeExercises.png';
import "./css/Exercises.css";
import { Suspense, useState } from "react";
import BarraBusqueda from "../components/BarraBusqueda";
import MenuExercises from "../components/MenuExercises";
export default function WorkoutsPage() {
  const [version, setVersion] = useState(0);
  const [section, setSection] = useState("listado");
  const onCreated = () => setVersion((v) => v + 1);
  return (
    <div className="page-container">
      <header className="site-header">
        <MenuBar />
      </header>
      <main className="site-main">
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
          { section === 'listado' && (
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
          
          ) }
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
        </div>

        <div className="footer">
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}
