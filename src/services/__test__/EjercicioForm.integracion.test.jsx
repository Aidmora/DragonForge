/* eslint-env jest */
/* eslint-env browser, jest */ 
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import EjercicioForm from '../../components/EjercicioForm'

const mockCrear = jest.fn(() => Promise.resolve({ id: 99 }))
jest.mock('../../services/ejercicios', () => ({
  crearEjercicio: (datos) => mockCrear(datos)
}))

test('integra formulario y llama a crearEjercicio + onCreated', async () => {
  const onCreated = jest.fn()
  render(<EjercicioForm onCreated={onCreated} />)
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
  fireEvent.click(screen.getByRole('button', { name: /Crear/i }))
  await waitFor(() => expect(mockCrear).toHaveBeenCalledTimes(1))
  expect(onCreated).toHaveBeenCalled()
})
