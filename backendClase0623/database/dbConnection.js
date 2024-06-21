const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Conexión exitosa a la base de datos...')
  } catch (error) {
    console.log("Error al conectar a la base de datos - " + error.message);
  }
};

module.exports = dbConnect;