const express = require("express");
const app = express();
const port = 3000;

const usersRouter = require("./routes/users");

const dbConnect = require("./database/dbConnection");

//FALTABA ESTOOO:
app.use(express.json());
app.use("/users", usersRouter);

//levanta el servidor
app.listen(port, () => {
  console.log(`App ejemplo escuchando en http://localhost:${port}`);
});

dbConnect();
