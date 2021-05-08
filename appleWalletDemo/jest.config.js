const {resolve} = require('path');

module.exports = {
  preset: 'react-native',
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        '\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
      },
    }),
  },
  transformIgnorePatterns: [resolve(__dirname, '../../packages')],
};

