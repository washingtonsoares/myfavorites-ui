module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['airbnb', 'plugin:jsx-a11y/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    plugins: ["jsx-a11y"],
    rules: {
        'array-bracket-spacing': ['error'],
        'global-require': 'off',
        'semi': ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'func-call-spacing': ['error', 'never'],
        'key-spacing': ['error'],
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'no-magic-numbers': ['error'],
        'no-constant-condition': ['error'],
        'no-inline-comments': ['error'],
        'no-lonely-if': ['error'],
        'no-mixed-operators': ['error'],
        'no-unneeded-ternary': ['error'],
        'no-else-return': ['error'],
        'no-unused-expressions': ['error', {allowShortCircuit: true}],
        'yoda': ['error'],
        'complexity': ['error', 5],
        'max-depth': ['error', 1],
        'max-lines': ['error', 300],
        'max-nested-callbacks': ['error', 3],
        'max-params': ['error', 4],
        'newline-per-chained-call': ['error'],
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        'linebreak-style': ['error', 'unix'],
        'react/jsx-filename-extension': [1, { "extensions": [".spec.js", ".jsx"] }],
        'react/no-typos': ['off'],
        'react/require-default-props': ['off'],
        'jsx-a11y/anchor-is-valid': ['off'],
        'jsx-a11y/label-has-for': ['off'],
        'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
        'import/prefer-default-export': ['off'],
        'import/no-named-as-default': ['off']
    },
    settings: {
        'import/resolver': {
            'webpack': {
                'config': 'webpack.config.js'
            }
        }
    }
  }