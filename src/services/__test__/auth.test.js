import { login } from '../auth.js'  
const OLD_ENV = process.env

describe('Auth service (mock)', () => {
  beforeEach(() => {
    process.env = { ...OLD_ENV, VITE_USE_MOCK: 'true' }
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('resuelve con token y usuario correctos usando credenciales válidas', async () => {
    const credentials = {
      email:    'arielabc389@gmail.com',
      password: 'sm00th78'
    }
    const { token, user } = await login(credentials)
    expect(token).toBe('mock-jwt-token')
    expect(user).toMatchObject({
      id:    1,
      email: 'arielabc389@gmail.com',
      name:  'Ariel Mora'
    })
  })

  it('rechaza con credenciales inválidas', async () => {
    await expect(
      login({ email: 'ariel389@gmail.com', password: '123' })
    ).rejects.toThrow('Invalid credentials')
  })
})
