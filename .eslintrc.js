module.exports = {
  extends: [
    // Next.jsの基本ESLint構成
    'next/core-web-vitals',
    // ESLint基本設定
    'eslint:recommended',
    // ESLintとPrettierが干渉しないようにする（extendsの最後に記載する）
    'prettier',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // TypeScriptのLint時に参照するconfigファイルを指定
    project: './tsconfig.json'
  },
  root: true
};
