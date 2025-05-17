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
          <div className="row">
            <div className="col-md-12 text-bg-primary">
            <Carousel />
          </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 text-bg-primary">
            </div>
            <div className="col-md-6 text-bg-primary">
            </div>
          </div>
          <div className="col-md-12 text-bg-primary">
          </div>
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
