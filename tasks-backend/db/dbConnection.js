const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL) ; //tengo que pasar una cadena de conexión

    console.log("Conectado a la base de datos...");
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = dbConnect;