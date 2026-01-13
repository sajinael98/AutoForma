/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '<BUILTIN_MODULES>',
    '^@/.*$',
    '^\\.\\.(?!/?$).*$',
    '^\\./.*$',
  ],
}
