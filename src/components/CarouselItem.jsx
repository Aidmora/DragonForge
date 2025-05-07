import React from 'react';

export default function CarouselItem({ item, pos, isActive }) {
  const positionClass = `pos-${pos}`;
  
  return (
    <div 
      className={`item ${positionClass} ${isActive ? 'active' : ''}`}
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <div className="content">
        {/* ... Contenido igual al original ... */}
      </div>
    </div>
  );
}