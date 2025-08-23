// eslint.config.cjs
const angular = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: ['projects/**/*']
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true
      }
    },
    plugins: {
      '@angular-eslint': angular,
      prettier
    },
    rules: {
      // custom Angular rules
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' }
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' }
      ],
      // enable Prettier
      'prettier/prettier': 'error'
    }
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': angularTemplate
    },
    rules: {
      // Use Angular template recommended rules
      ...angularTemplate.configs.recommended.rules
    }
  }
];
