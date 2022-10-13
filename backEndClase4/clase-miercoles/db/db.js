const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conectado a la base de datos...");
  } catch (error) {
    console.log("No se pudo conectar...");
    console.error(error.message);
  }
};

module.exports = { connect };