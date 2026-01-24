import { Request, Response } from "express";
import { Produto } from "../Entidade/Produto";
import { ProdutoRepository } from "../Repositories/ProdutoRepository";

const repositorio = new ProdutoRepository();

export class ProdutoController {

    
    async cadastrar(req: Request, res: Response) {
        try {
            const { nome, especificacao, preco, quantidade } = req.body;
            const novoProduto = new Produto(nome, especificacao, preco, quantidade);
            
            const resultado = await repositorio.inserir(novoProduto);
            return res.status(201).json({ mensagem: "Produto cadastrado com sucesso!", produto: resultado });
        } catch (error) {
            console.error("erro no servidor:", error);
            return res.status(500).json({ erro: "Erro ao cadastrar produto" });
        }
    }

    async listar(req: Request, res: Response) {
        try {
            const produtos = await repositorio.listarTodos();
            return res.json(produtos);
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao buscar produtos" });
        }
    }

    async buscarPorId(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);
            
            const produto = await repositorio.buscarPorId(id);
            if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
            
            return res.json(produto);
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao buscar produto" });
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);
            
            const { nome, especificacao, preco, quantidade } = req.body;
            const produtoAtualizado = new Produto(nome, especificacao, preco, quantidade, id);

            const sucesso = await repositorio.atualizar(produtoAtualizado);
            if (!sucesso) return res.status(404).json({ erro: "Produto não encontrado para atualizar" });

            return res.json({ mensagem: "Produto atualizado com sucesso!" });
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao atualizar" });
        }
    }

    
    async deletar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);
            
            const sucesso = await repositorio.deletar(id);
            if (!sucesso) return res.status(404).json({ erro: "Produto não encontrado" });

            return res.json({ mensagem: "Produto deletado com sucesso!" });
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao deletar" });
        }
    }
}