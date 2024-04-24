const Sequelize = require('sequelize');

const sequelize = new Sequelize('hokkie-club', 'root', 'Sp00kies@79', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;