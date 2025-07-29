module.exports = {
    branches: [
      'release',
      'test-ci-workflow',
      { name: 'main', prerelease: true },
      { name: 'test-ci-workflow-pre', prerelease: true }
    ],
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'angular',
          releaseRules: [
            { type: 'feature', release: 'major' },
            { type: 'design', release: 'minor' },
            { type: ['bom', 'silk'], release: 'patch' }
          ]
        }
      ],
      [
        '@semantic-release/release-notes-generator',
        {
          preset: 'conventionalcommits',
          presetConfig: {
            types: [
              { type: 'feature', section: '✨ Features', hidden: false },
              { type: 'design', section: '🎨 Design', hidden: false },
              { type: 'silk', section: '🧵 Silk Layer', hidden: false },
              { type: 'bom', section: '📦 BOM', hidden: false },
              { type: 'ci', section: '⚙️ CI', hidden: false },
              { type: 'chore', section: '🔧 Chore', hidden: false },
              { type: 'docs', section: '📝 Docs', hidden: false }
            ]
          }
        }
      ],
      '@semantic-release/exec',
      [
        '@semantic-release/github',
        {
          assets: [
            {
              path: 'dist/release-jekyll_report_website-*.zip',
              label: 'Release Jekyll Report Website'
            }
          ]
        }
      ]
    ]
  };
  