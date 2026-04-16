//por usar ts, necessario request/response
import express , { Request , Response } from "express";
import {produtoRouter}

const app = express();
app.use(express.json());
const PORT = 3000;



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost: ${PORT}`);
});



