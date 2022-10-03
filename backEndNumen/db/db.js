const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://marcosgual:marcos123@cluster0.hj11eqa.mongodb.net/test"
    );
    console.log("Conectado a la base de datos...");
  } catch {
    throw new Error("No se pudo conectar a la base de datos");
  }
};

module.exports = { connect };