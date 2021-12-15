module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  modulePaths: [
    "<rootDir>"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/src/test.ts",
    "<rootDir>/src/app/app-routing.module.spec.ts"
  ],
  collectCoverage: true,
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: '50',
      functions: '50',
      lines: '50',
      statements: '50',
    }
  }
};