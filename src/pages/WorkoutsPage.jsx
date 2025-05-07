import React from 'react';
import MenuBar from '../components/MenuBar';
import Carousel from '../components/Carousel';
import './Workouts.css';

export default function WorkoutsPage() {
  return (
    <div className="page-container">
      <MenuBar />
      <main className="site-main">
        <div className="content-wrapper">
          <Carousel />
        </div>
      </main>
      <footer className="site-footer">
        <div className="content-wrapper">
          © 2025 Dragon Forge
        </div>
      </footer>
    </div>
  );
}
