// src/components/__tests__/EjercicioForm.integracion.test.jsx
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import EjercicioForm from '../../components/EjercicioForm'

// Mock del servicio crearEjercicio
const mockCrear = jest.fn(() => Promise.resolve({ id: 99 }))
jest.mock('../../services/ejercicios', () => ({
  crearEjercicio: (datos) => mockCrear(datos)
}))

test('integra formulario y llama a crearEjercicio + onCreated', async () => {
  const onCreated = jest.fn()
  render(<EjercicioForm onCreated={onCreated} />)

  // Relleno el formulario
  fireEvent.change(screen.getByLabelText(/Nombre/i), {
    target: { value: 'X' }
  })
  fireEvent.change(screen.getByLabelText(/Dificultad/i), {
    target: { value: 'Y' }
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

  // Hago submit
  fireEvent.click(screen.getByRole('button', { name: /Crear/i }))

  // Espero a que el servicio se invoque
  await waitFor(() => expect(mockCrear).toHaveBeenCalledTimes(1))

  // Verifico que onCreated haya sido llamado
  expect(onCreated).toHaveBeenCalled()
})
