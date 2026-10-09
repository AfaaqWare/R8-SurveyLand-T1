module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  settings: { react: { version: 'detect' } },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier' // يعطي أفضلية لإعدادات prettier عند التعارض
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import'],
  rules: {
    // أمثلة قواعد؛ عدّل حسب تفضيلك
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/order': ['warn', { 'newlines-between': 'never' }],
    '@typescript-eslint/no-empty-object-type': 'off'
  },
  ignorePatterns: ['.next', 'node_modules', 'dist']
};
