import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
// Mocks de assets y estilos
jest.mock('../../assets/DragonForge.png', () => null)
jest.mock('../../pages/css/LoginStyles.css', () => {})
jest.mock('../../pages/css/RegistroStyles.css', () => {})
// Mock servicios/usuarios para evitar ESM
jest.mock('../../services/usuarios', () => ({
  registerUser:    jest.fn(),
  loginUser:       jest.fn(),
  getUsuarios:     jest.fn(),
  getUsuarioPorId: jest.fn(),
  updateUsuario:   jest.fn(),
  updatePhenotipo: jest.fn(),
}))

import { AuthContext } from '../../contexts/AuthContext'
import Protected from '../../components/Protected'
import LoginPage from '../../pages/LoginPage'
import RegistroPage from '../../pages/RegistroPage'
import FormularioLogin from '../../components/FormularioLogin'
import FormularioRegistro from '../../components/FormularioRegistro'

// Integration tests para páginas y componentes protegidos

describe('Protected (integration)', () => {
  it('muestra solo el mensaje de carga', () => {
    render(
      <AuthContext.Provider value={{ user: null, loading: true }}>
        <Protected><div>OK</div></Protected>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Cargando...')).toBeInTheDocument()
  })

  it('redirige a /login si no hay usuario', () => {
    render(
      <MemoryRouter initialEntries={['/prot']}>
        <AuthContext.Provider value={{ user: null, loading: false }}>
          <Protected><div>Secret</div></Protected>
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.queryByText('Secret')).not.toBeInTheDocument()
  })

  it('renderiza children cuando user existe', () => {
    render(
      <AuthContext.Provider value={{ user: { id: 1 }, loading: false }}>
        <Protected><div>Secret</div></Protected>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Secret')).toBeInTheDocument()
  })
})

describe('LoginPage (integration)', () => {
  it('muestra mensaje de error si login lanza', async () => {
    const login = jest.fn(() => Promise.reject(new Error('Fail login')))
    render(
      <AuthContext.Provider value={{ login }}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'e' } })
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: 'p' } })
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }))
  })
})

describe('RegistroPage (integration)', () => {
  it('valida email sin @ y muestra error', () => {
    const register = jest.fn()
    render(
      <AuthContext.Provider value={{ register }}>
        <MemoryRouter>
          <RegistroPage />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'no-at-sign' } })
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: '12345678' } })
    fireEvent.click(screen.getByRole('button', { name: /Registrarse/i }))
    expect(screen.getByText('El correo debe contener un “@”')).toBeInTheDocument()
    expect(register).not.toHaveBeenCalled()
  })

  it('valida contraseña corta y muestra error', () => {
    const register = jest.fn()
    render(
      <AuthContext.Provider value={{ register }}>
        <MemoryRouter>
          <RegistroPage />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'a@b' } })
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: 'short' } })
    fireEvent.click(screen.getByRole('button', { name: /Registrarse/i }))
    expect(screen.getByText('La contraseña debe tener al menos 8 caracteres')).toBeInTheDocument()
    expect(register).not.toHaveBeenCalled()
  })
})
