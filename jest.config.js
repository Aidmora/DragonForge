// jest.config.js
export default {
  testEnvironment: 'jsdom',
  // Si quitas extensionsToTreatAsEsm ya no te da el warning
  setupFilesAfterEnv: [], 
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  }
}
