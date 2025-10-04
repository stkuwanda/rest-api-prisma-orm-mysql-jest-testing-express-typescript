import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import jest from 'eslint-plugin-jest';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
  {
    files: ['src/**/*.{js,ts}'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
      parser: tseslint.parser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      jest,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...jest.configs['flat/recommended'].rules,
      ...eslintPluginPrettier.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'jest/prefer-expect-assertions': 'off',
      quotes: 'off',
    },
  },
  {
    files: [
      'src/tests/**/*.test.ts',
      'src/tests/**/*.test.js',
      'src/tests/**/*.spec.ts',
      'src/tests/**/*.spec.js',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
];
