module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  // eslint规则
  // 当前基于 https://github.com/vuejs/eslint-config-vue
  rules: {
    // 关闭--禁止使用any
    // '@typescript-eslint/no-explicit-any': 0,
    // 关闭--函数必须显式注明返回类型
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // 关闭--禁止使用!断言
    '@typescript-eslint/no-non-null-assertion': 0,
    // 关闭--禁止require语句
    '@typescript-eslint/no-var-requires': 0,
    // 关闭--禁止ts忽略检测
    '@typescript-eslint/ban-ts-comment': 0,
    // 关闭--禁止promise里面使用async/await (以后确定再做限制)
    'no-async-promise-executor': 0,
    // 单引号
    quotes: ['error', 'single'],
    // 缩进（统一使用prettier缩进即可）
    // indent: [
    //   'error',
    //   2,
    //   {
    //     SwitchCase: 1,
    //   },
    // ],
    // 使用全等
    eqeqeq: ['error', 'smart'],
    // 对象使用点号
    'dot-notation': 'error',
    // 禁止使用eval
    'no-eval': 'error',
    // 函数最多参数个数
    'max-params': ['error', 5],
    // 不能使用var
    'no-var': 'error',
    // 大括号约定（即，不能使用 if (foo) foo++;风格 ）
    curly: 'error',
    // async 函数里面必须要有await
    'require-await': 'error',
    // 圈复杂度
    complexity: ['error', 15],
    // 禁止嵌套三目运算
    'no-nested-ternary': 'error',
    // 注释样式
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    'no-this-alias': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
