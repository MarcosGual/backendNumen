require('dotenv').config();

module.exports={
    HOST: process.env.HOST,
    USER: process.env.USUARIO,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE,
    PUERTO_BD: process.env.DB_PORT,
    DIALECTO: process.env.DIALECTO
}