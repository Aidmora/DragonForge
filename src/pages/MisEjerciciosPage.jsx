import React from 'react'
import MenuBar from '../components/MenuBar'
import Footer from '../components/Footer'
import Spinner from '../components/Spinner'
function SettingsPage() {
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

export default SettingsPage