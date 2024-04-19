const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');


const attributes = {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,

  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
}


const User = sequelize.define('User', attributes);


module.exports = User;
