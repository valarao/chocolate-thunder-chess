module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:mocha/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'mocha',
  ],
  rules: {
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    {
      files: ['server/tests/**.spec.js'],
      rules: {
        'linebreak-style': 'off',
        'func-names': 'off',
        'prefer-arrow-callback': 'off',
      },
    },
  ],
};
