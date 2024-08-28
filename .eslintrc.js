module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "babel.config.js",
    "jest.config.js",
    "node_modules",
  ],
  plugins: ["jest"],
  rules: {},
};
