//por usar ts, necessario request/response
import express , { Request , Response } from "express";
import { Express } from "express";
import { Produto } from "./Produto";
import produtoRouter from

const app = express();
app.use(express.json());
const PORT = 3000;

app.use("/api", produtorouter)


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost: ${PORT}`);
});




