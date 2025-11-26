// src/controllers/Produto.controller.ts
import { Request, Response } from "express";
import { ProdutoService } from "../services/Produto.service";

const service = new ProdutoService();

// CREATE
export async function inserirProduto(req: Request, resp: Response) {
    try {
        const { nomeproduto, preco } = req.body;
        const newId = await service.createProduto(nomeproduto, preco);

        return resp.status(201).send({ message: "Produto cadastrado com sucesso!", id: newId });
    } catch(error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido.";
        return resp.status(400).send({ message: errorMessage });
    }
}

// GET COM PARÂMETRO (ID)
export async function buscarProduto(req: Request, resp: Response) {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) { return resp.status(400).send({ message: "ID inválido." }); }

        const produto = await service.getProdutoById(id);

        return resp.status(200).json(produto);
    } catch(error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido.";
        // Status 404 para "Não Encontrado"
        if (errorMessage.includes("não encontrado")) {
            return resp.status(404).send({ message: errorMessage });
        }
        return resp.status(500).send({ message: "Erro interno do servidor." });
    }
}

// UPDATE
export async function atualizarProduto(req: Request, resp: Response) {
    try {
        const id = parseInt(req.params.id);
        const { nomeproduto, preco } = req.body;
        if (isNaN(id)) { return resp.status(400).send({ message: "ID inválido." }); }
        
        await service.updateProduto(id, nomeproduto, preco);

        return resp.status(200).send({ message: "Produto atualizado com sucesso!" });

    } catch(error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido.";
        return resp.status(400).send({ message: errorMessage });
    }
}

// DELETE
export async function deletarProduto(req: Request, resp: Response) {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) { return resp.status(400).send({ message: "ID inválido." }); }

        await service.deleteProduto(id);

        // Status 204 No Content é o padrão para sucesso de deleção
        return resp.status(204).send();

    } catch(error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido.";
        if (errorMessage.includes("não encontrado")) {
            return resp.status(404).send({ message: errorMessage });
        }
        return resp.status(500).send({ message: "Erro ao deletar produto." });
    }
}