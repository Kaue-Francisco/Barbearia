import express, { NextFunction, Request, Response } from "express";
import router from "./routes";
import cors from "cors";

const app = express();

const PORT = 3001;

app.use(express.json()); // Define como padrão de comunicação JSON
app.use(cors()); // Define que qualquer origem pode acessar a API
app.use(router); // Use as rotas definidas no routes.ts

// Inicia o server
app.listen(PORT, () => {
  console.log(`Server está rodando na porta: ${PORT}`);
});
