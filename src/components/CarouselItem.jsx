import React from 'react'

export default function CarouselItem({ item, pos }) {
  return (
    <div
      className={`item pos-${pos}`}
      style={{ backgroundImage: `url(${item.img})` }}
    />
  )
}
