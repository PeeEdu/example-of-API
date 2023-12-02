// sequelize-config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bancapastel', 'root', 'gustavo10001', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
