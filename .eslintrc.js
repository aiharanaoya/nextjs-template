module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],
  // TypeScript用の設定
  plugins: ['@typescript-eslint'],
  // TypeScript用の設定
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // TypeScriptのLint時に参照するconfigファイルを指定
    project: './tsconfig.json'
  },
  // ESLintの対象から外す
  ignorePatterns: ['.eslintrc.js', 'next.config.js'],
  // ルートディレクトリに置いている場合書いておく
  root: true,
  rules: {
    // インポート文を先頭に書かないとエラーにする
    'import/first': 'error',
    // インポート順をソートする設定
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  },
  overrides: [
    // インポート順をソートする設定
    {
      files: ['**/*.ts?(x)'],
      settings: {
        'import/resolver': 'typescript'
      },
      extends: ['plugin:import/typescript']
    }
  ]
};
