const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Player = sequelize.define('player', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  surname: Sequelize.STRING,
  position: Sequelize.STRING,
  age: Sequelize.INTEGER,
  goals: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  } 
});

module.exports = Player;