// src/components/CarouselItem.jsx
import React from 'react'

export default function CarouselItem({ item, pos, onClick, animating }) {
  return (
    <div
      className={`item pos-${pos} ${animating ? 'animating' : ''}`}
      style={{ backgroundImage: `url(${item.img})` }}
      onClick={onClick}
    />
  )
}
