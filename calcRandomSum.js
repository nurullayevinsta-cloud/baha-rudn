const chalk = require('chalk');

const firstRandomValue = Math.random();
const secondRandomValue = Math.random();
const totalSum = firstRandomValue + secondRandomValue;

console.log(chalk.yellow(totalSum));
