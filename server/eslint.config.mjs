import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import * as espree from 'espree'; // Use named import for espree

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.node, // Use 'globals.node' for Node.js projects
      parser: espree, // Set to the espree parser
      parserOptions: {
        ecmaVersion: 2021, // Specify the ECMAScript version
        sourceType: 'module', // Enable ES modules
      },
    },
    rules: {
      // Add custom rules here
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-unused-vars': ['warn'],
      eqeqeq: ['error', 'always'],
      // Additional rules can be added as needed
    },
  },
  {
    // Configuration for React
    files: ['**/*.{jsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: espree, // Use the imported espree parser
    },
    ...pluginReact.configs.flat.recommended,
  },
  pluginJs.configs.recommended,
];
