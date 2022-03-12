module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    'ignorePatterns': ['**/locale/**'],
    rules: {
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            closeBracket: 0,
            switchCase: 0,
            ignores: []
        }],
        'vue/max-attributes-per-line': [2, {
            singleline: 10,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }],
        indent: ['error', 4],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/script-indent': [
            'error',
            4,
            { baseIndent: 1 }
        ],
        'space-before-function-paren': ['error', 'never'],
        semi: [2, 'never'],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off'
    },
    overrides: [{
        files: ['*.vue'],
        rules: {
            indent: 'off'
        }
    }]
}