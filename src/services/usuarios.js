// src/services/usuarios.js
const BASE = '/api';

async function request(path, options = {}) {
  const res = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export const registerUser = datos =>
  request('/usuarios', {
    method: 'POST',
    body: JSON.stringify(datos)
  });

export const loginUser = credentials =>
  request('/usuarios/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });

export const getUsuarios = () =>
  request('/usuarios');

export const getUsuarioPorId = id =>
  request(`/usuarios/${id}`);
