const { dbConnect } = require("../database/dbConnection");
const app = require('../app');

const port = process.env.PORT || "3000";

dbConnect(); //conexión a la base de datos Mongo

//Inicio de la aplicación de backend
app.listen(port, () => {
  console.log(
    `App ejemplo escuchando en puerto: ${port}. Acceda por http://localhost:${port}`
  );
});