const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conectado a la base de datos...");
  } catch (error) {
    throw new Error(
      "No se pudo conectar a la base de datos. Error: " + error.message
    );
  }
};

module.exports = connect;
