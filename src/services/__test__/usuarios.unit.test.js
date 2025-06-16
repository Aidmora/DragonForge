import { 
  beforeEach, 
  afterEach, 
  describe, 
  it, 
  expect, 
  jest 
} from '@jest/globals'

import { 
  registerUser, 
  loginUser, 
  getUsuarios, 
  getUsuarioPorId 
} from '../usuarios'

describe('Usuarios service (unit)', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })
  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('registerUser', () => {
    it('resuelve con los datos del usuario creado', async () => {
      const mockData = { id: 1, nombre: 'Ariel' }
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData)
      })

      const result = await registerUser({ nombre: 'Ariel' })
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/usuarios',
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({ nombre: 'Ariel' })
        })
      )
      expect(result).toEqual(mockData)
    })

    it('lanza error si la respuesta no es ok', async () => {
      global.fetch.mockResolvedValueOnce({ ok: false, statusText: 'Bad Request' })
      await expect(registerUser({})).rejects.toThrow('Bad Request')
    })
  })

  describe('loginUser', () => {
    it('resuelve con el token y usuario al loguear', async () => {
      const mockData = { token: 'abc123', user: { id: 1 } }
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData)
      })

      const result = await loginUser({ email: 'e', password: 'p' })
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/usuarios/login',
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({ email: 'e', password: 'p' })
        })
      )
      expect(result).toEqual(mockData)
    })

    it('lanza error con credenciales inválidas', async () => {
      global.fetch.mockResolvedValueOnce({ ok: false, statusText: 'Unauthorized' })
      await expect(loginUser({ email: 'e', password: 'bad' })).rejects.toThrow('Unauthorized')
    })
  })

  describe('getUsuarios', () => {
    it('resuelve con la lista de usuarios', async () => {
      const mockList = [{ id: 1 }, { id: 2 }]
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockList)
      })

      const result = await getUsuarios()
      expect(global.fetch).toHaveBeenCalledWith('/api/usuarios', expect.any(Object))
      expect(result).toEqual(mockList)
    })

    it('lanza error si falla la petición', async () => {
      global.fetch.mockResolvedValueOnce({ ok: false, statusText: 'Error' })
      await expect(getUsuarios()).rejects.toThrow('Error')
    })
  })

  describe('getUsuarioPorId', () => {
    it('resuelve con el usuario correcto', async () => {
      const mockUser = { id: 5, nombre: 'Foo' }
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockUser)
      })

      const result = await getUsuarioPorId(5)
      expect(global.fetch).toHaveBeenCalledWith('/api/usuarios/5', expect.any(Object))
      expect(result).toEqual(mockUser)
    })

    it('lanza error si no existe', async () => {
      global.fetch.mockResolvedValueOnce({ ok: false, statusText: 'Not Found' })
      await expect(getUsuarioPorId(999)).rejects.toThrow('Not Found')
    })
  })
})
