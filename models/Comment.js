const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const attributes = {
  commentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}

const Comment = sequelize.define('Comment', attributes);

module.exports = Comment;
