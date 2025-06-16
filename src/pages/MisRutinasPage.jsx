import React from 'react'
import MenuBar from '../components/MenuBar'
import Footer from "../components/Footer";
import EjerciciosList     from '../components/EjerciciosList';
import EjercicioForm from '../components/EjercicioForm';
import './css/MisRutinas.css';
import Spinner from '../components/Spinner';
function MisRutinasPage() {
  return (
    <div className="page-container">
      <MenuBar />
      <main className="site-main">
        <div className="contenidoMisRutinas">
          <Spinner message="Continuamos implementando..." className="Spinner"></Spinner>
        </div>
        <div className="footer">
          <Footer></Footer>
        </div>
      </main>
    </div>
  )
}

export default MisRutinasPage;