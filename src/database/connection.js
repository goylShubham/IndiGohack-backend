const { HOST, NAME, USER, PWD, DIALECT } = require("../config").DATABASE;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: HOST,
  database: NAME,
  username: USER,
  password: PWD,
  dialect: DIALECT,
});

module.exports = sequelize;
