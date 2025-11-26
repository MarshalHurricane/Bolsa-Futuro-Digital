// src/app.ts
import express from "express";
import router from "./routes/Produto.routes"; // Caminho corrigido

const app = express();
const PORT = 3000; // Constante de porta definida

app.use(express.json()); // Middleware para ler JSON

app.use("/", router ); // Montando as rotas

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

export default app;