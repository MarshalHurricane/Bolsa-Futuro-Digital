import { Express } from "express";
import { Router } from "express";
import { Request, Response } from "express";


const router = Router();
const port = 3000;



router.post("/inserirProduto", (req , res) => {
    const { nome, preco } = req.body
    const produto = new Produto(nome, preco)

    res.send("Produto cadastrado com sucesso.")
})

export default router;