// Dependencies

//Sequelize constructor
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

sequelize = new sequelize({
    host: 'localhost',
    port: 3306
});



module.exports = sequelize;