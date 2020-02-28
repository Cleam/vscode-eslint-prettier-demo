module.exports = {
  root: true,
  // 环境配置（根据实际情况做取舍）
  env: {
    browser: true,
    node: true
  },
  globals: {
    PRODUCTION: true,
    PREPRODUCTION: true,
    DEVELOPMENT: true
  },
  // 使用xmfe插件
  plugins: ['xmfe'],
  // 继承xmfe的配置。
  extends: ['plugin:xmfe/recommended'],
  // 自定义规则
  rules: {
    'no-console': 'off'
  }
};
