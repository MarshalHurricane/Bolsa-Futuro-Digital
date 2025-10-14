import { Express, Router } from "express";
import { Produto } from "../Entidades/Produto";
import express , {Request , Response} from "express";

const router = Router();

const estoque: Produto[] = [
    new Produto(13123, "rtx4060", 2000),
    new Produto(12372, "rtx4070", 3800),
    new Produto(14123, "rtx4080", 10500),
    new Produto(19832, "rtx4090", 16000),
]


router.get("/Estoque", (req : Request, res : Response) => {
    res.status(200).json(estoque);
})

router.post("/inserirProduto", (req , res) => {
    const { id, nome, preco } = req.body
    const produto = new Produto(id, nome, preco)

    res.send("Produto cadastrado com sucesso.")
})

export default router;