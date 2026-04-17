import { Express, Router } from "express";
import { Produto } from "../Entidades/Produto";
import express , {Request , Response} from "express";

const router = Router();

const Estoque = [
    new Produto(13123, "rtx4060", 2000),
    new Produto(12372, "rtx4070", 3800),
    new Produto(14123, "rtx4080", 10500),
    new Produto(19832, "rtx4090", 16000),
]


router.get("/Estoque", (req : Request, res : Response) => {
    res.send("")
})

router.get("Usuario")


/*
const produto1 = new Produto(13123, "rtx4060");
const produto2 = new Produto(12372, "rtx4070");
const produto3 = new Produto(14123, "rtx4080");
const produto4 = new Produto(19832, "rtx4090");
*/


app.post("/Produto", (req : Request, rep : Response) => {
    
})


app.get("/inserirProduto", (req, resp) => {
    const {id, nome, preco} = req.body
    const carro = new Produto(id, nome, preco)

    resp.send("Cadastrado com sucesso!")
})

const produtos: Produto[] = [
    new Produto (1, "gtx5080", 21000 ),
    new Produto (2, "rtx5070", 3800)
]
app.get("/retornarProduto", ( _ ,resp) => {
    resp.json(produtos)
})

export default router