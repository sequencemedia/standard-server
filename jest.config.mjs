export default {
  bail: 0,
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.(jsx|mjs|cjs)',
    '**/test/client/**/?(*.)+(spec|test).(jsx|mjs|cjs)'
  ],
  rootDir: '.', // location of babel.config.js
  collectCoverage: false,
  setupFiles: ['./jest.setup.cjs']
}
