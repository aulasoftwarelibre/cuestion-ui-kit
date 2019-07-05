module.exports = {
  preset: "ts-jest",
  rootDir: "src",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./internal/jest-setup.ts"],
  globals: { "ts-jest": { diagnostics: { ignoreCodes: [151001] } } },
  globalSetup: "./internal/global-setup.js"
};

