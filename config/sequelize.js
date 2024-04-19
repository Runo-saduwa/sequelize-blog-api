
const Sequelize = require('sequelize');

const dbConfig = require('./db');

const sequelize = new Sequelize(dbConfig.development);

module.exports = sequelize;
