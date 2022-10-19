import express, { Request, Response } from "express";
const port = 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor Express+TypeScript ejecutándose...");
});

app.listen(port);

console.log("App corriendo en http://localhost:" + port);
