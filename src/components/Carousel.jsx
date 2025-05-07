import React, { useState } from 'react'
import data from '../data/carouselData'
import CarouselItem from './CarouselItem'
import './Carousel.css'

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const len = data.length

  const prev = () => setCurrent(c => (c - 1 + len) % len)
  const next = () => setCurrent(c => (c + 1) % len)

  const bgImage = data[current].img

  return (
    <div
      className="carousel"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="list">
        {data.map((item, idx) => {
          const pos = (idx - current + len) % len
          // omitimos el fondo activo
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