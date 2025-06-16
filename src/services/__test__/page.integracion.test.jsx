import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

// Mocks
jest.mock('../../assets/DragonForge.png', () => null)
jest.mock('../../contexts/AuthContext', () => {
  const React = require('react')
  return { AuthContext: React.createContext() }
})

import Protected from '../../components/Protected'
import LoginPage from '../../pages/LoginPage'
import RegistroPage from '../../pages/RegistroPage'
import { AuthContext } from '../../contexts/AuthContext'

describe('Protected (integracion)', () => {
  it('muestra spinner cuando loading=true', () => {
    render(
      <AuthContext.Provider value={{ user: null, loading: true }}>
        <Protected><div>OK</div></Protected>
      </AuthContext.Provider>
    )
    expect(screen.getByRole('status')).toHaveTextContent('Cargando…')
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

describe('LoginPage (integracion)', () => {
  it('muestra mensaje de error si login lanza', async () => {
    const login = jest.fn(() => Promise.reject(new Error('Fail login')))
    render(
      <AuthContext.Provider value={{ login }}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'e' } })
    fireEvent.change(screen.getByLabelText(/Contraseña/), { target: { value: 'p' } })
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }))
  })
})

describe('RegistroPage (integracion)', () => {
  it('valida email sin @ y muestra error', () => {
    const register = jest.fn()
    render(
      <AuthContext.Provider value={{ register }}>
        <MemoryRouter>
          <RegistroPage />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'no-at-sign' } })
    fireEvent.change(screen.getByLabelText(/Contraseña/), { target: { value: '12345678' } })
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

    fireEvent.change(screen.getByLabelText(/^Email$/), { target: { value: 'a@b' } })
    fireEvent.change(screen.getByLabelText(/Contraseña/), { target: { value: 'short' } })
    fireEvent.click(screen.getByRole('button', { name: /Registrarse/i }))

    expect(screen.getByText('La contraseña debe tener al menos 8 caracteres')).toBeInTheDocument()
    expect(register).not.toHaveBeenCalled()
  })
})
