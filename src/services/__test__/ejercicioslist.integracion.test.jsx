// src/services/__test__/ejercicioslist.integracion.test.jsx
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import EjerciciosList from '../../components/EjerciciosList'

jest.mock('../../services/ejercicios', () => ({
  getEjercicios: () => Promise.resolve([
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
  render(<EjerciciosList />)
  expect(screen.getByRole('status')).toBeInTheDocument()
  await waitForElementToBeRemoved(() => screen.getByRole('status'))
  expect(screen.getByText('Prensa piernas')).toBeInTheDocument()
})
