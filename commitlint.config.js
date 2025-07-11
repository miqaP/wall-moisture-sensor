module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feature',
      'design',
      'silk',
      'bom',
      'ci',
      'chore',
      'docs',
    ]],
    'subject-case': [2, 'always', ['sentence-case', 'lower-case']],
  },
};