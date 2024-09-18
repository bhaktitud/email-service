module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-non-null-assertion': 1,
        "@typescript-eslint/consistent-type-definitions": "error",
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error', {
                'varsIgnorePattern': '^_',
                'argsIgnorePattern': '^_'
            }
        ],
        'array-bracket-spacing': ['error', 'always'],
        'arrow-parens': [1, 'as-needed'],
        'arrow-spacing': [
            'error', {
                'before': true,
                'after': true
            }
        ],
        'block-spacing': 'error',
        'func-call-spacing': ['error', 'never'],
        'semi': 2,
        'semi-spacing': 1,
        'semi-style': [1, 'last'],
        'keyword-spacing': 1,
        'key-spacing': 1,
        'linebreak-style': ["error", "unix"],
        'no-trailing-spaces': [2, { skipBlankLines: true }],
        'no-whitespace-before-property': "error",
        'object-curly-spacing': [1, 'always'],
        'jsx-quotes': [1, 'prefer-single'],
        'quotes': [1, 'single'],
        'eqeqeq': 1,
        'no-undef': 0,
        'no-unneeded-ternary': 1,
        'no-extra-bind': 2,
        'no-console': 2,
        'function-paren-newline': ["error", { "minItems": 3 }],
        'comma-spacing': [
            1, {
                before: false,
                after: true,
            },
        ],
        'brace-style': [
            'error',
            'stroustrup',
            { allowSingleLine: true }
        ],
        'space-before-blocks': 1,
        'space-before-function-paren': [1, 'never'],
        'space-in-parens': 1,
        'space-infix-ops': 1,
        'space-unary-ops': [
            1, {
                words: true,
                nonwords: false,
                overrides: { '+': true },
            },
        ],
        'spaced-comment': 1,
        'rest-spread-spacing': 2,
        'prettier/prettier': 0,
        'no-multiple-empty-lines': [
            1, {
                max: 1,
                maxEOF: 0,
            },
        ],
        'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
        'array-bracket-newline': [
            1, {
                multiline: true,
                minItems: 3,
            },
        ],
        'array-element-newline': [1, { minItems: 3 }],
        'object-property-newline': 1,
        'object-curly-newline': [
            'error', {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 2
                },
                ObjectPattern: {
                    'multiline': true,
                    'minProperties': 1
                },
                ImportDeclaration: {
                    'multiline': true,
                    'minProperties': 3
                },
                ExportDeclaration: {
                    'multiline': true,
                    'minProperties': 2
                },
            },
        ],
        'indent': [1, 4],
        'no-tabs': 0,
    },
};
