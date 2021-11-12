import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>/tests'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePathIgnorePatterns: [],
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: 'test.ts',
  setupFiles: [],
  moduleNameMapper: {
    '^@src/(.*)': '<rootDir>/src/$1',
  },
};
export default config;
