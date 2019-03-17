const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ["airbnb", "plugin:jest/recommended", "prettier", "prettier/react"],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parser: "babel-eslint",
  plugins: ["jest", "prettier"],
  rules: {
    "no-sequences": OFF,
    "global-require": OFF,
    "import/no-extraneous-dependencies": OFF,
    "import/no-named-as-default": OFF,
    "react/destructuring-assignment": OFF,
    "react/sort-comp": OFF,
    "react/no-unused-state": OFF,
    "react/no-array-index-key": OFF,
    "react/react-in-jsx-scope": OFF,
    "react/jsx-filename-extension": [OFF, { extensions: [".js"] }],
    "react/forbid-prop-types": [ERROR, { forbid: ["any"] }],
    "react/no-unescaped-entities": [Error, { forbid: [">", "}"] }],
    "react/require-default-props": WARNING,
    "no-unused-expressions": OFF,
    "no-use-before-define": OFF,
    "no-restricted-syntax": OFF,
    "no-nested-ternary": OFF,
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: true,
        trailingComma: "es5",
        proseWrap: "always",
        tabWidth: 2,
        printWidth: 80
      }
    ]
  }
};
