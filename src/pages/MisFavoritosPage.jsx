import React from "react";
import MenuBar from "../components/MenuBar";
import Spinner from '../components/Spinner';
import Footer from "../components/Footer";
import '../pages/css/MisFavoritos.css'
function MisFavoritosPage() {
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

export default MisFavoritosPage;
