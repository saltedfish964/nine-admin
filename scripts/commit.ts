import { exec } from 'child_process';
import ora from 'ora';
import { input } from '@inquirer/prompts';
import select from '@inquirer/select';

const commitType = await select({
  message: '请选择日志类型：',
  choices: [
    {
      name: 'feat   : 新功能',
      value: 'feat',
    },
    {
      name: 'fix    : 修复 bug',
      value: 'fix',
    },
    {
      name: 'doc    : 文档',
      value: 'doc',
    },
    {
      name: 'package: 包管理',
      value: 'package',
    },
    {
      name: 'art    : 代码格式调整',
      value: 'art',
    },
  ],
});

const bodyMessage = await input({
  message: '请输入日志：',
});

const spinner = ora('日志提交中').start();
spinner.color = 'yellow';
exec(
  `git commit -m "${commitType}: ${bodyMessage}"`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`${error.message}`);
      spinner.fail('日志提交失败');
      return;
    }
    if (stderr) {
      console.error(`${stderr}`);
    }
    spinner.succeed(`日志提交成功: ${stdout}`);
  },
);
