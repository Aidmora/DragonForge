import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { AuthContext } from '../../contexts/AuthContext'
jest.mock('../../services/usuarios', () => ({
  registerUser:    jest.fn(),
  loginUser:       jest.fn(),
  getUsuarios:     jest.fn(),
  getUsuarioPorId: jest.fn(),
  updateUsuario:   jest.fn(),
  updatePhenotipo: jest.fn(),
}))

const mockCrear = jest.fn(() => Promise.resolve({ id: 99 }))
jest.mock('../../services/ejercicios', () => ({
  crearEjercicio: (datos) => mockCrear(datos)
}))

import EjercicioForm from '../../components/EjercicioForm'

test('integra formulario y llama a crearEjercicio + onCreated', async () => {
  const onCreated = jest.fn()

  render(
    <AuthContext.Provider value={{ user: {}, setUser: jest.fn() }}>
      <EjercicioForm onCreated={onCreated} />
    </AuthContext.Provider>
  )
  fireEvent.change(screen.getByLabelText(/Nombre/i), {
    target: { value: 'X' }
  })
  fireEvent.change(screen.getByLabelText(/Grupo muscular/i), {
    target: { value: 'A,B' }
  })
  fireEvent.change(screen.getByLabelText(/Equipamiento/i), {
    target: { value: 'C' }
  })
  fireEvent.change(screen.getByLabelText(/Instrucciones/i), {
    target: { value: '...' }
  })
  fireEvent.click(screen.getByRole('button', { name: /Crear ejercicio/i }))
  await waitFor(() => expect(mockCrear).toHaveBeenCalledTimes(1))
  expect(onCreated).toHaveBeenCalled()
})
