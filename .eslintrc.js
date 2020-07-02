module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react-native/all'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prefer-const': ['error'],
    'max-len': [
      2,
      80,
      2,
      {
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreComments: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'no-use-before-define': ['error', { functions: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
  },
  overrides: [],
};
