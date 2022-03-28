module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "pages/**/*.{ts,tsx}",
    "subsets/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "!components/icons/**",
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/.firebase/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["js", "ts", "tsx"],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  "setupFiles": ["jest-canvas-mock"]
};