const dbConfig = require("../config/dbConfig");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECTO,
    port: dbConfig.PUERTO_BD
  }
);

const db = {};

db.sequelize = sequelize;
db.models = {};
db.models.Curso = require("./curso")(sequelize, Sequelize.DataTypes);
db.models.Alumno = require("./alumno")(sequelize, Sequelize.DataTypes);

db.models.Curso.hasMany(db.models.Alumno);
db.models.Alumno.belongsTo(db.models.Curso);

module.exports = db;