module.exports = {
    rootDir: './src',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules', '<rootDir>'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': [
        'esbuild-jest',
        {
          sourcemap: true,
          loaders: {
            '.spec.ts': 'tsx'
          }
        }
      ]
    }
  };