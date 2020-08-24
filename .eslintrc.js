module.exports = {
  parser: '@typescript-eslint/parser',
  extends: 'react-app',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'no-script-url': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
}
