import React, { useState, useEffect, useContext } from "react";
import EjercicioCard from "../components/EjercicioCard";
import { getEjercicios } from "../services/ejercicios";
import Spinner from "../components/Spinner";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthContext";
import "../pages/css/MisEjercicios.css";

export default function MisEjercicios() {
  const { user } = useContext(AuthContext);
  const [ejercicios, setEjercicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    getEjercicios()
      .then((data) => {
        if (!mounted) return;
        const creados = new Set(user?.rutinas || []);
        const filtrados = data.filter((e) => creados.has(e.id));
        setEjercicios(filtrados);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [user]);

  return (
    <div className="page-container">
      <MenuBar />
      <main className="site-main">
        <div className="MisEjercicios">
          {loading ? (
            <Spinner message="Cargando Tus Ejercicios..."></Spinner>
          ) : (
            <>
              <div className="tituloMisEj">
                <h2>EJERCICIOS CREADOS</h2>
              </div>
              <div className="card-grid">
                {ejercicios.map((e) => (
                  <EjercicioCard key={e.id} ejercicio={e} />
                ))}
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
