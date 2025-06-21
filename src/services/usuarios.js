const BASE = "/api";

async function request(path, options = {}) {
  const res = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  if (res.status === 204) {
    return null;
  }
  return res.json();
}

export const registerUser = (datos) =>
  request("/usuarios", {
    method: "POST",
    body: JSON.stringify(datos),
  });

export const loginUser = (credentials) =>
  request("/usuarios/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

export const getUsuarios = () => request("/usuarios/");
export const getUsuarioPorId = usuario_id =>
  request(`/usuarios/${usuario_id}/`);         

export const updateUsuario = (usuario_id, datos) =>
  request(`/usuarios/${usuario_id}`, {
    method: 'PUT',
    body: JSON.stringify(datos)
  });

export const updatePhenotipo = (usuario_id, fenotipo) =>
  request(`/usuarios/${usuario_id}/fenotipo`, {
    method: 'PATCH',
    body: JSON.stringify(fenotipo)
  });