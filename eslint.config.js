import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist/'] },
  ...eslintPluginAstro.configs.recommended,
];
