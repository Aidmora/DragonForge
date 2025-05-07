// src/services/auth.js
import api from './api';

const MOCK_TOKEN = 'mock-jwt-token';
const MOCK_USER  = { id: 1, email: 'arielabc389@gmail.com', name: 'Ariel Mora' };

export function login(credentials) {
  console.log('📦 VITE_USE_MOCK =', import.meta.env.VITE_USE_MOCK);
  if (import.meta.env.VITE_USE_MOCK === 'true') {
    // simula delay de red
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          credentials.email === 'arielabc389@gmail.com' &&
          credentials.password === 'sm00th78'
        ) {
          resolve({ token: MOCK_TOKEN, user: MOCK_USER });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  }
  // producción: llamas realmente al API
  return api.post('/auth/login', credentials).then(r => r.data);
}
