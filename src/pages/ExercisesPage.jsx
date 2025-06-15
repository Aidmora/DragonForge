import React from "react";
import MenuBar from "../components/MenuBar";
import EjerciciosList from "../components/EjerciciosList";
import EjercicioForm from "../components/EjercicioForm";
import Footer from "../components/Footer";
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
          {section === "listado" && (
            <Suspense fallback={<p>Cargando ejercicios…</p>}>
              <EjerciciosList version={version} />
            </Suspense>
          )}

          {section === "nuevo" && (
            <>
              <h2>Crear nuevo ejercicio</h2>
              <EjercicioForm onCreated={onCreated} />
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
