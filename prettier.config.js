/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  semi: true,
  printWidth: 100,
  trailingComma: 'all',
  arrowParens: 'always',
  plugins: [require('prettier-plugin-tailwindcss')],
};
