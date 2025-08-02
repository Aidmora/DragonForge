// src/services/__test__/ejercicioslist.integracion.test.jsx
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { AuthContext } from '../../contexts/AuthContext'
import EjerciciosList from '../../components/EjerciciosList'

// Mock servicios/usuarios para que no intente cargar el ESM real
jest.mock('../../services/usuarios', () => ({
  registerUser:    jest.fn(),
  loginUser:       jest.fn(),
  getUsuarios:     jest.fn(),
  getUsuarioPorId: jest.fn(),
  updateUsuario:   jest.fn(),
  updatePhenotipo: jest.fn(),
}))

// Mock del servicio de ejercicios
jest.mock('../../services/ejercicios', () => ({
  getEjercicios: () =>
    Promise.resolve([
      {
        id: 42,
        nombre: 'Prensa piernas',
        dificultad: 'Alta',
        grupo_muscular: ['Cuádriceps'],
        equipamiento: ['Máquina'],
        instrucciones: 'Siéntate…'
      }
    ])
}))

test('integra componente + servicio y muestra ejercicios', async () => {
  render(
    <AuthContext.Provider value={{ user: {}, setUser: jest.fn() }}>
      <EjerciciosList />
    </AuthContext.Provider>
  )

  // 1) aparece el spinner inicialmente (primer elemento con role="status")
  const statuses = screen.getAllByRole('status')
  expect(statuses[0]).toBeInTheDocument()

  // 2) espera a que desaparezca
  await waitForElementToBeRemoved(() => screen.queryAllByRole('status'))

  // 3) muestra el ejercicio mockeado
  expect(screen.getByText('Prensa piernas')).toBeInTheDocument()
})
