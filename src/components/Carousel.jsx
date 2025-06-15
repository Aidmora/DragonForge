// src/components/Carousel.jsx
import React, { useState } from 'react'
import data from '../data/carouselData'
import CarouselItem from './CarouselItem'
import './css/Carousel.css'

export default function Carousel() {
  const [current, setCurrent]         = useState(0)
  const [clickedIndex, setClickedIndex] = useState(null)
  const [animating, setAnimating]       = useState(false)
  const len = data.length

  const handlePreviewClick = idx => {
    setClickedIndex(idx)    
    setAnimating(true)    
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
      setClickedIndex(null)
    }, 300)
  }

  const active = data[current]

  return (
    <div
      className="carousel"
      style={{ backgroundImage: `url(${active.img})` }}
    >
      <div className="mainBack">
        <div className="main-content">
          <h2 className="titulo">{active.titulo}</h2>
          <p className="name">{active.nombre}</p>
          <p className="desc">{active.descripcion}</p>
        </div>
      </div>

      <div className="list">
        {data.map((item, idx) => {
          const pos = (idx - current + len) % len
          if (pos === 0) return null

          return (
            <CarouselItem
              key={idx}
              item={item}
              pos={pos}
              onClick={() => handlePreviewClick(idx)}
              animating={animating && clickedIndex === idx}
            />
          )
        })}
      </div>
    </div>
  )
}
