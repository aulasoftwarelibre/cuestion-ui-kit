module.exports = {
  preset: 'ts-jest',
  rootDir: 'src',
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: './internal/jest-setup.ts',
  globals: {'ts-jest': {diagnostics: {ignoreCodes: [151001]}}}
};
