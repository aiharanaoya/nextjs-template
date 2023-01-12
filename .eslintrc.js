module.exports = {
  extends: [
    // Next.jsの基本ESLint構成
    'next/core-web-vitals',
    // ESLint基本設定
    'eslint:recommended',
    // インポート順をソートする
    'plugin:import/recommended',
    // ESLintとPrettierが干渉しないようにする（extendsの最後に記載する）
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
