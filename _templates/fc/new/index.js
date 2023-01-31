module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'dir',
        message: 'どのディレクトリに作成しますか？（例）src/components/'
      },
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名は何ですか？（例）Button'
      },
      {
        type: 'confirm',
        name: 'haveProps',
        message: 'Propsは持ちますか？',
        choices: ['Yes', 'No'],
        initial: 'Yes'
      }
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { dir, name, haveProps } = answers;

      const path = `${dir || 'src/components/'}/${name}`;
      const typeAnnotate = haveProps ? `FC<Props>` : 'FC';
      const props = haveProps ? '({}: Props)' : '()';

      return { ...answers, path, typeAnnotate, props };
    });
  }
};
