const Sequelize = require('sequelize');
const chalk = require('chalk');

console.log(chalk.yellow('Opening database connection'));

const db = new Sequelize(null, {
  logging: false
});

module.exports = db;
