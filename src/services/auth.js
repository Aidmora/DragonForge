// src/services/auth.js
import api from './api';

const MOCK_TOKEN = 'mock-jwt-token';
const MOCK_USER  = { id: 1, email: 'arielabc389@gmail.com', name: 'Ariel Mora' };

export function login(credentials) {
  // Determinamos si estamos en modo “mock”:
  // 1) En Vite import.meta.env existe
  // 2) En Node/Jest import.meta puede no existir, así que usamos process.env
  const useMock = (
    typeof import.meta !== 'undefined' &&
    import.meta?.env?.VITE_USE_MOCK === 'true'
  ) || process.env.VITE_USE_MOCK === 'true';

  console.log('📦 useMock =', useMock);

  if (useMock) {
    // simulamos un delay de red
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

  // En producción llamamos al API real
  return api.post('/auth/login', credentials).then(r => r.data);
}
