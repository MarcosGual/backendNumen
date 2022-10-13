const app = require("./app");
require("dotenv").config();

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(
    `Ejemplo escuchando en puerto ${port}. Abrir en navegador: http://localhost:${port}`
  );
});
