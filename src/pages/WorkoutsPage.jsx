import React from 'react';
import MenuBar from '../components/MenuBar';
import './Workouts.css';

export default function WorkoutsPage() {
  return (
    <div className="page-container">
      <MenuBar />

      <main className="site-main">
        <div className="content-wrapper">
          <h2>Hola Mundoooo!</h2>
          {/* aquí tu grid o lista de workouts */}
        </div>
      </main>

      <footer className="site-footer">
        <div className="content-wrapper">
          <span>© 2025 Dragon Forge</span>
          {/* si quieres más elementos en el footer, los pones aquí */}
        </div>
      </footer>
    </div>
  );
}
