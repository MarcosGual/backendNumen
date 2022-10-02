const app = require("./app");
const port = 3000;

app.listen(port, () => {
  console.log(
    `Ejemplo escuchando en puerto ${port}. Abrir en navegador: http://localhost:${port}`
  );
});