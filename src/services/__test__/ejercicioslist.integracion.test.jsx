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

  // 1) aparece el spinner inicialmente
  expect(screen.getByRole('status')).toBeInTheDocument()

  // 2) espera a que el spinner desaparezca (envuelto en act)
  await waitForElementToBeRemoved(() => screen.getByRole('status'))

  // 3) muestra el ejercicio mockeado
  expect(screen.getByText('Prensa piernas')).toBeInTheDocument()
})
