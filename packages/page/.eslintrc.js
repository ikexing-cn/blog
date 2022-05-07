module.exports = {
    env: {
        'vue/setup-compiler-macros': true
    },
    extends: [
        '../../.eslintrc.js',
        'plugin:vue/vue3-recommended'
    ],
    plugins: [
        'vue'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser'
    }
}
