// src/services/Produto.service.ts
import { Produto } from "../models/Produto";
import { ProdutoRepository } from "../repositories/Produto.repository";

const repos = new ProdutoRepository();

export class ProdutoService {

    // CREATE
    async createProduto(nome: string, preco: number): Promise<number> {
        if (!nome || preco <= 0) {
            throw new Error("Dados do produto inválidos.");
        }
        const produto = new Produto(nome, preco);
        return repos.InserirNoBd(produto);
    }
    
    // GET
    async getProdutoById(id: number): Promise<Produto> {
        const produto = await repos.BuscarPorId(id);
        if (!produto) {
            throw new Error(`Produto com ID ${id} não encontrado.`);
        }
        return produto;
    }

    // UPDATE
    async updateProduto(id: number, nome: string, preco: number): Promise<boolean> {
        if (!nome || preco <= 0) {
            throw new Error("Dados de atualização inválidos.");
        }
        // Buscar e validar a existência é uma boa prática de Service
        const produtoExistente = await repos.BuscarPorId(id);
        if (!produtoExistente) {
             throw new Error(`Produto com ID ${id} não encontrado.`);
        }
        
        // Aplica e salva
        produtoExistente.NomeProduto = nome;
        produtoExistente.Preco = preco;
        produtoExistente.id = id;

        return repos.AtualizarNoBd(produtoExistente);
    }

    // DELETE
    async deleteProduto(id: number): Promise<boolean> {
        const sucesso = await repos.DeletarNoBd(id);
        if (!sucesso) {
            throw new Error(`Produto com ID ${id} não encontrado para deleção.`);
        }
        return sucesso;
    }
}