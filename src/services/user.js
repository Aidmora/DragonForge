// src/services/user.js
import api from './api';

const MOCK_USER  = { id: 1, email: 'arielabc389@gmail.com', name: 'Ariel Mora' };

export function getProfile() {
  if (import.meta.env.VITE_USE_MOCK) {
    console.log('Usando MOCK getProfile');
    return Promise.resolve(MOCK_USER);
  }
  return api.get('/users/me').then(r => r.data);
}
