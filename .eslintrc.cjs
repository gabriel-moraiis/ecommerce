module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'no-unused-vars': 'off',
    'no-useless-return': 'off',
    'consistent-return': 'off',
    'no-return-await': 'off',
    'prefer-const': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
  },
};
