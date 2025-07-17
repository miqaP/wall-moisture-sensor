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
    'subject-case': [2, 'always', ['sentence-case']],
    'body-max-line-length': [2, 'always', 500],
    'header-max-length': [2, 'always', 200],
  },
};