/** @see https://nextjs.org/docs/testing#jest-and-react-testing-library */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx']
};

module.exports = createJestConfig(customJestConfig);
