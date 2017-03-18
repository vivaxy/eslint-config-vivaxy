/**
 * @since 2017-03-18 14:21:25
 * @author vivaxy
 */

module.exports = {
    extends: 'airbnb',
    rules: {
        'indent': [
            'error',
            // prefer 4 spaces over 2
            4,
            {
                // case should be intented
                'SwitchCase': 1
            }
        ],
        'import/no-named-as-default': [
            // disable this for redux connect @see https://github.com/benmosher/eslint-plugin-import/issues/544
            'off'
        ],
        'import/no-named-as-default-member': [
            // disable this for redux connect @see https://github.com/benmosher/eslint-plugin-import/issues/544
            'off'
        ],
        'import/no-extraneous-dependencies': [
            // we use dependencies when developing
            'off'
        ],
        // @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': [
            'error',
            {
                'extensions': [
                    '.js'
                ]
            }
        ],
        // @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': [
            'error',
            4
        ],
        // @see http://eslint.org/docs/rules/arrow-parens
        'arrow-parens': [
            'error',
            'always'
        ],
        'max-len': [
            'error',
            120
        ],
        // @see http://eslint.org/docs/rules/arrow-body-style
        // if no brace, there might be [no-confusing-arrow](http://eslint.org/docs/rules/no-confusing-arrow) error
        'arrow-body-style': [
            'error',
            'always'
        ],
        'no-unused-vars': [
            'warn',
            {
                'vars': 'all',
                'args': 'after-used',
                'caughtErrors': 'none'
            }
        ],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'never',
                'named': 'never',
                'asyncArrow': 'never'
            }
        ],
        'react/prefer-stateless-function': [
            'off'
        ],
        'react/forbid-prop-types': [
            'off'
        ],
        'no-plusplus': [
            'off'
        ],
        'react/jsx-indent-props': [
            'error',
            4
        ],
        'import/prefer-default-export': [
            'off'
        ],
        // to use `await` to denote a value that is a thenable, the proformace issue should be taken care of by compiler
        'no-return-await': [
            'off'
        ]
    },
    env: {
        'browser': true
    },
    parser: 'babel-eslint'
};
