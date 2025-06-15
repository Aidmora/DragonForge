import React from 'react'
import "./css/Footer.css"
import SocialMediaFoot from './SocialMediaFoot'
function Footer() {
  return (
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
  )
}

export default Footer