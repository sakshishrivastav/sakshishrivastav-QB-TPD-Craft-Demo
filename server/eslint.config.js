import pluginJs from '@eslint/js';
import globals from 'globals';


const customrules = {
    'array-callback-return': [
        'error'
    ],
    'arrow-parens': [
        'off'
    ],
    'arrow-spacing': [
        'off'
    ],
    'block-spacing': [
        'off'
    ],
    'brace-style': [
        'off'
    ],
    'class-methods-use-this': [
        'error'
    ],
    'comma-dangle': [
        'off'
    ],
    'comma-spacing': [
        'off'
    ],
    'comma-style': [
        'off'
    ],
    'complexity': [
        'warn'
    ],
    'computed-property-spacing': [
        'off'
    ],
    'constructor-super': [
        'error'
    ],
    'curly': [
        0
    ],
    'dot-location': [
        'off'
    ],
    'eol-last': [
        'off'
    ],
    'for-direction': [
        'error'
    ],
    'func-call-spacing': [
        'off'
    ],
    'function-call-argument-newline': [
        'off'
    ],
    'function-paren-newline': [
        'off'
    ],
    'generator-star': [
        'off'
    ],
    'generator-star-spacing': [
        'off'
    ],
    'getter-return': [
        'error'
    ],
    'implicit-arrow-linebreak': [
        'off'
    ],
    'indent': [
        'error',
        4
    ],
    'key-spacing': [
        'off'
    ],
    'keyword-spacing': [
        'off'
    ],
    'lines-around-comment': [
        0
    ],
    'linebreak-style': [
        'error',
        'unix'
    ],
    'max-len': [
        0
    ],
    'max-statements-per-line': [
        'off'
    ],
    'multiline-ternary': [
        'off'
    ],
    'new-parens': [
        'off'
    ],
    'newline-per-chained-call': [
        'off'
    ],
    'no-arrow-condition': [
        'off'
    ],
    'no-async-promise-executor': [
        'error'
    ],
    'no-case-declarations': [
        'error'
    ],
    'no-class-assign': [
        'error'
    ],
    'no-compare-neg-zero': [
        'error'
    ],
    'no-cond-assign': [
        'error'
    ],
    'no-console': [
        'warn'
    ],
    'no-const-assign': [
        'error'
    ],
    'no-constant-condition': [
        'error'
    ],
    'no-control-regex': [
        'error'
    ],
    'no-debugger': [
        'error'
    ],
    'no-delete-var': [
        'error'
    ],
    'no-dupe-args': [
        'error'
    ],
    'no-dupe-class-members': [
        'error'
    ],
    'no-dupe-keys': [
        'error'
    ],
    'no-dupe-else-if': [
        'error'
    ],
    'no-duplicate-case': [
        'error'
    ],
    'no-empty': [
        'error'
    ],
    'no-empty-character-class': [
        'error'
    ],
    'no-empty-pattern': [
        'error'
    ],
    'no-empty-function': [
        'error'
    ],
    'no-ex-assign': [
        'error'
    ],
    'no-extra-boolean-cast': [
        'error'
    ],
    'no-extra-bind': [
        'error'
    ],
    'no-extra-parens': [
        'off'
    ],
    'no-extra-semi': [
        'off'
    ],
    'no-fallthrough': [
        'error'
    ],
    'no-floating-decimal': [
        'off'
    ],
    'no-func-assign': [
        'error'
    ],
    'no-global-assign': [
        'error'
    ],
    'no-import-assign': [
        'error'
    ],
    'no-inner-declarations': [
        'error'
    ],
    'no-invalid-regexp': [
        'error'
    ],
    'no-irregular-whitespace': [
        'error'
    ],
    'no-lone-blocks': [
        'error'
    ],
    'no-loss-of-precision': [
        'error'
    ],
    'no-misleading-character-class': [
        'error'
    ],
    'no-mixed-operators': [
        'error'
    ],
    'no-mixed-spaces-and-tabs': [
        'off'
    ],
    'no-multi-spaces': [
        'off'
    ],
    'no-multi-str': [
        'error'
    ],
    'no-multiple-empty-lines': [
        'off'
    ],
    'no-nonoctal-decimal-escape': [
        'error'
    ],
    'no-octal': [
        'error'
    ],
    'no-obj-calls': [
        'error'
    ],
    'no-prototype-builtins': [
        'error'
    ],
    'no-redeclare': [
        'error'
    ],
    'no-regex-spaces': [
        'error'
    ],
    'no-reserved-keys': [
        'off'
    ],
    'no-restricted-properties': [
        'off'
    ],
    'no-restricted-syntax': [
        'error',
        'FunctionExpression',
        'WithStatement',
        'BinaryExpression[operator=\'in\']'
    ],
    'no-return-assign': [
        'off'
    ],
    'no-return-await': [
        'error'
    ],
    'no-script-url': [
        'error'
    ],
    'no-self-assign': [
        'error'
    ],
    'no-self-compare': [
        'error'
    ],
    'no-setter-return': [
        'error'
    ],
    'no-shadow': [
        'off'
    ],
    'no-shadow-restricted-names': [
        'error'
    ],
    'no-sparse-arrays': [
        'error'
    ],
    'no-tabs': [
        0
    ],
    'no-template-curly-in-string': [
        'error'
    ],
    'no-this-before-super': [
        'error'
    ],
    'no-trailing-spaces': [
        'off'
    ],
    'no-undef': [
        'error'
    ],
    'no-undef-init': [
        'error'
    ],
    'no-unexpected-multiline': [
        0
    ],
    'no-unmodified-loop-condition': [
        'error'
    ],
    'no-unneeded-ternary': [
        'error'
    ],
    'no-unreachable': [
        'error'
    ],
    'no-unsafe-finally': [
        'error'
    ],
    'no-unsafe-negation': [
        'error'
    ],
    'no-unsafe-optional-chaining': [
        'error'
    ],
    'no-unused-expressions': [
        'error'
    ],
    'no-unused-labels': [
        'error'
    ],
    'no-use-before-define': [
        'off'
    ],
    'no-useless-backreference': [
        'error'
    ],
    'no-useless-catch': [
        'error'
    ],
    'no-useless-concat': [
        'error'
    ],
    'no-useless-escape': [
        'error'
    ],
    'no-useless-rename': [
        'error'
    ],
    'no-useless-return': [
        'error'
    ],
    'no-var': [
        'error'
    ],
    'no-void': [
        'error'
    ],
    'no-warning-comments': [
        'error'
    ],
    'no-whitespace-before-property': [
        'off'
    ],
    'no-with': [
        'error'
    ],
    'object-curly-newline': [
        'off'
    ],
    'object-curly-spacing': [
        'off'
    ],
    'object-property-newline': [
        'off'
    ],
    'one-var-declaration-per-line': [
        'off'
    ],
    'operator-assignment': [
        'off'
    ],
    'operator-linebreak': [
        'off'
    ],
    'padded-blocks': [
        'off'
    ],
    'padding-line-between-statements': [
        'error'
    ],
    'prefer-arrow-callback': [
        'error'
    ],
    'prefer-const': [
        'error'
    ],
    'prefer-destructuring': [
        'error'
    ],
    'prefer-numeric-literals': [
        'error'
    ],
    'prefer-object-spread': [
        'error'
    ],
    'prefer-promise-reject-errors': [
        'error'
    ],
    'prefer-regex-literals': [
        'error'
    ],
    'prefer-rest-params': [
        'error'
    ],
    'prefer-spread': [
        'error'
    ],
    'prefer-template': [
        'error'
    ],
    'quote-props': [
        'off'
    ],
    'quotes': [
        'error',
        'single'
    ],
    'radix': [
        'error'
    ],
    'require-jsdoc': [
        'off'
    ],
    'require-unicode-regexp': [
        'off'
    ],
    'rest-spread-spacing': [
        'off'
    ],
    'semi': [
        'error',
        'always'
    ],
    'semi-spacing': [
        'off'
    ],
    'semi-style': [
        'off'
    ],
    'sort-imports': [
        'off'
    ],
    'sort-keys': [
        'off'
    ],
    'sort-vars': [
        'off'
    ],
    'space-before-blocks': [
        'off'
    ],
    'space-before-function-paren': [
        'off'
    ],
    'space-in-parens': [
        'off'
    ],
    'space-infix-ops': [
        'off'
    ],
    'space-unary-ops': [
        'off'
    ],
    'spaced-comment': [
        'off'
    ],
    'switch-colon-spacing': [
        'error',
        {
            'after': true,
            'before': false
        }
    ],
    'symbol-description': [
        'error'
    ],
    'template-curly-spacing': [
        'error',
        'never'
    ],
    'template-tag-spacing': [
        'error',
        'always'
    ],
    'unicode-bom': [
        'error'
    ],
    'use-isnan': [
        'error'
    ],
    'valid-typeof': [
        'error'
    ],
    'vars-on-top': [
        'error'
    ],
    'wrap-iife': [
        'error'
    ],
    'wrap-regex': [
        'off'
    ],
    'yield-star-spacing': [
        'off'
    ]
};


export default [
    {
        languageOptions: { globals: globals.node },
        rules: customrules,
    },
    pluginJs.configs.recommended,
];
