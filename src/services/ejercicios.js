// src/services/ejercicios.js
const BASE = '/api'

async function request(path, options = {}) {
  const res = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

export const getEjercicios = () => request('/ejercicios')
export const crearEjercicio = datos =>
  request('/ejercicios', {
    method: 'POST',
    body: JSON.stringify(datos)
  })
