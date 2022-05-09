module.exports = {
    env: {
        'vue/setup-compiler-macros': true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        '../.eslintrc.js'
    ],
    plugins: [
        'vue'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': ['warn', {
            singleline: {
                max: 8
            },
            multiline: {
                max: 8
            }
        }],
        'vue/html-indent': ['warn', 4]
    }
}
