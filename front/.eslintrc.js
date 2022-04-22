module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['react', '@typescript-eslint', 'prettier']
};
