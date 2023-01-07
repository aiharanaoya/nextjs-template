module.exports = {
  extends: [
    // SCSS基本設定
    'stylelint-config-standard-scss',
    // StyleLintとPrettierが干渉しないようにする（extendsの最後に記載する）
    'stylelint-config-prettier'
  ]
};
