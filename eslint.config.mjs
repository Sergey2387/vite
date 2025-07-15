import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    rules: {}
  },
  pluginPrettier.recommended({
    rules: {
      'prettier/prettier': 'warn'
    }
  })
]
