
import { jest } from '@jest/globals'
import { getEjercicios, crearEjercicio } from '../../services/ejercicios'

describe('servicios/ejercicios', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('getEjercicios hace GET a /ejercicios y devuelve JSON', async () => {
    const fake = [{ id: 1, nombre: 'X' }]
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(fake)
    })

    const data = await getEjercicios()
    expect(fetch).toHaveBeenCalledWith('/api/ejercicios', expect.any(Object))
    expect(data).toEqual(fake)
  })

  it('getEjercicios lanza si fetch.ok es false', async () => {
    fetch.mockResolvedValueOnce({ ok: false, statusText: 'fail' })
    await expect(getEjercicios()).rejects.toThrow('fail')
  })

  it('crearEjercicio hace POST con JSON y devuelve respuesta', async () => {
    const payload = { nombre: 'Push ups' }
    const fakeRes = { id: 42, ...payload }
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(fakeRes)
    })

    const data = await crearEjercicio(payload)
    expect(fetch).toHaveBeenCalledWith('/api/ejercicios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    expect(data).toEqual(fakeRes)
  })

  it('crearEjercicio lanza si status no OK', async () => {
    fetch.mockResolvedValueOnce({ ok: false, statusText: 'err' })
    await expect(crearEjercicio({})).rejects.toThrow('err')
  })
})
