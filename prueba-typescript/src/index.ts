import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/suma", (req: Request, res: Response) => {
  const num1: number = Number(req.query.num1);
  const num2: number = Number(req.query.num2);

  res.json({ resultadoSuma: num1 + num2 });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
