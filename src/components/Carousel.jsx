import React, { useState } from 'react'
import data from '../data/carouselData'
import CarouselItem from './CarouselItem'
import './Carousel.css'

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const len = data.length

  const prev = () => setCurrent(c => (c - 1 + len) % len)
  const next = () => setCurrent(c => (c + 1) % len)

  // slide activo = bench de fondo
  const active = data[current]

  return (
    <div
      className="carousel"
      style={{
        backgroundImage: `url(${active.img})`
      }}
    >
      <div className="main-content">
        <h2>{active.titulo}</h2>
        <p className="name">{active.nombre}</p>
        <p className="desc">{active.descripcion}</p>
        {active.link && (
          <a className="btn" href={active.link}>
            Ver más
          </a>
        )}
      </div>

      <div className="list">
        {data.map((item, idx) => {
          const pos = (idx - current + len) % len
          if (pos === 0) return null  
          return <CarouselItem key={idx} item={item} pos={pos} />
        })}
      </div>
      <div className="flechas">
        <button onClick={prev}>&lt;</button>
        <button onClick={next}>&gt;</button>
      </div>
    </div>
  )
}
