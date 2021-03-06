module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./internal/jest-setup.ts"],
  globals: { "ts-jest": { diagnostics: { ignoreCodes: [151001] } } },
  globalSetup: "./internal/global-setup.js",
  roots: ["<rootDir>packages"],
  modulePathIgnorePatterns: ["<rootDir>/packages/[^/]+/dist/"],
  testMatch: ["**/__tests__/**/.+(ts|tsx|js)", "**/*.test.+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
