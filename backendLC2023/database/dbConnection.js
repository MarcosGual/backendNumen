const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conexión a base de datos exitosa...')
    } catch (error) {
        console.log('Error al conectarse a la base de datos: ' + error.message);
    }
}

module.exports = dbConnect;