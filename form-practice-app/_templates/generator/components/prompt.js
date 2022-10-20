module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: '配置するディレクトリを選択してください。',
    choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
  },
  {
    type: 'input',
    name: 'component_name',
    message: 'コンポーネントの名前を指定してください。ex) Header',
    validate: (input) => input !== '',
  },
  {
    type: 'confirm',
    name: 'require_storybook',
    message: '.stories.tsxも一緒に作成しますか？',
    choices: ["Yes", "No"],
    initial: "Yes",
  },
];