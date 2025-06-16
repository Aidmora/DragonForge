import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import FormularioLogin from '../../components/FormularioLogin'
import FormularioRegistro from '../../components/FormularioRegistro'
describe('FormularioLogin (unit)', () => {
  it('muestra valores iniciales en los inputs', () => {
    render(
      <MemoryRouter>
        <FormularioLogin
          email="foo@bar"
          password="123456"
          error={null}
          setEmail={() => {}}
          setPassword={() => {}}
          handleSubmit={() => {}}
        />
      </MemoryRouter>
    )
    expect(screen.getByLabelText(/Email/)).toHaveValue('foo@bar')
    expect(screen.getByLabelText(/Contraseña/)).toHaveValue('123456')
  })

  it('muestra mensaje de error cuando error no es null', () => {
    render(
      <MemoryRouter>
        <FormularioLogin
          email=""
          password=""
          error="Boom!"
          setEmail={() => {}}
          setPassword={() => {}}
          handleSubmit={() => {}}
        />
      </MemoryRouter>
    )
    expect(screen.getByText('Boom!')).toBeInTheDocument()
  })

  it('llama setEmail al cambiar el email', () => {
    const setEmail = jest.fn()
    render(
      <MemoryRouter>
        <FormularioLogin
          email=""
          password=""
          error={null}
          setEmail={setEmail}
          setPassword={() => {}}
          handleSubmit={() => {}}
        />
      </MemoryRouter>
    )
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'a@b' } })
    expect(setEmail).toHaveBeenCalledWith('a@b')
  })

  it('llama setPassword al cambiar la contraseña', () => {
    const setPassword = jest.fn()
    render(
      <MemoryRouter>
        <FormularioLogin
          email=""
          password=""
          error={null}
          setEmail={() => {}}
          setPassword={setPassword}
          handleSubmit={() => {}}
        />
      </MemoryRouter>
    )
    fireEvent.change(screen.getByLabelText(/Contraseña/), { target: { value: 'secret' } })
    expect(setPassword).toHaveBeenCalledWith('secret')
  })
})

describe('FormularioRegistro (unit)', () => {
  it('renderiza valores iniciales correctamente', () => {
    render(
      <FormularioRegistro
        nombre="Ariel"
        email="a@b"
        contrasenia="12345678"
        telefono="0999999999"
        error={null}
        setNombre={() => {}}
        setEmail={() => {}}
        setContrasenia={() => {}}
        setTelefono={() => {}}
        handleSubmit={() => {}}
      />
    )
    expect(screen.getByLabelText(/Nombre completo/)).toHaveValue('Ariel')
    expect(screen.getByLabelText(/^Email$/)).toHaveValue('a@b')
    expect(screen.getByLabelText(/Contraseña/)).toHaveValue('12345678')
    expect(screen.getByLabelText(/Teléfono/)).toHaveValue('0999999999')
  })

  it('llama setNombre al cambiar nombre', () => {
    const setNombre = jest.fn()
    render(
      <FormularioRegistro
        nombre=""
        email=""
        contrasenia=""
        telefono=""
        error={null}
        setNombre={setNombre}
        setEmail={() => {}}
        setContrasenia={() => {}}
        setTelefono={() => {}}
        handleSubmit={() => {}}
      />
    )
    fireEvent.change(screen.getByLabelText(/Nombre completo/), { target: { value: 'X' } })
    expect(setNombre).toHaveBeenCalledWith('X')
  })

  it('llama setEmail al cambiar email', () => {
    const setEmail = jest.fn()
    render(
      <FormularioRegistro
        nombre=""
        email=""
        contrasenia=""
        telefono=""
        error={null}
        setNombre={() => {}}
        setEmail={setEmail}
        setContrasenia={() => {}}
        setTelefono={() => {}}
        handleSubmit={() => {}}
      />
    )
    fireEvent.change(screen.getByLabelText(/^Email$/), { target: { value: 'x@y' } })
    expect(setEmail).toHaveBeenCalledWith('x@y')
  })

  it('llama setContrasenia al cambiar contraseña', () => {
    const setContrasenia = jest.fn()
    render(
      <FormularioRegistro
        nombre=""
        email=""
        contrasenia=""
        telefono=""
        error={null}
        setNombre={() => {}}
        setEmail={() => {}}
        setContrasenia={setContrasenia}
        setTelefono={() => {}}
        handleSubmit={() => {}}
      />
    )
    fireEvent.change(screen.getByLabelText(/Contraseña/), { target: { value: 'abc12345' } })
    expect(setContrasenia).toHaveBeenCalledWith('abc12345')
  })

  it('llama setTelefono al cambiar teléfono', () => {
    const setTelefono = jest.fn()
    render(
      <FormularioRegistro
        nombre=""
        email=""
        contrasenia=""
        telefono=""
        error={null}
        setNombre={() => {}}
        setEmail={() => {}}
        setContrasenia={() => {}}
        setTelefono={setTelefono}
        handleSubmit={() => {}}
      />
    )
    fireEvent.change(screen.getByLabelText(/Teléfono/), { target: { value: '0123' } })
    expect(setTelefono).toHaveBeenCalledWith('0123')
  })
})
