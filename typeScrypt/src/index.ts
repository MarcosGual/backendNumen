import express, { Request, Response } from "express";
const port: number = 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor Express+Typescript ejecutándose...");
});

app.listen(port);

console.log("App corriendo en http://localhost:" + port);