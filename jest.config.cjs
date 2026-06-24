module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],
  clearMocks: true,
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^features/(.*)$": "<rootDir>/src/features/$1",
    "^entities/(.*)$": "<rootDir>/src/entities/$1",
    "^shared/(.*)$": "<rootDir>/src/shared/$1",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  testMatch: ["**/*.spec.ts", "**/*.spec.tsx"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.spec.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/index.ts",
  ],
  coverageReporters: ["lcov", "json-summary"],
}
