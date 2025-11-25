import { Produto } from "../Entidade/Produto";
import { Request, Response } from "express";
import { ProdutoRepository } from "../Repositories/ProdutoRepository";

const repos = new ProdutoRepository;

async function inserirProduto(req: Request, resp: Response){
try {
    const {NomedoProduto, preco} = req.body;
    const produto = new Produto(NomedoProduto, preco);
    await repos.InserirNoBd(produto);

    return resp.send("Produto cadastrado com sucesso!");
    }
    
    catch(error: unknown) {
    return resp.send((Error));
    }
}


