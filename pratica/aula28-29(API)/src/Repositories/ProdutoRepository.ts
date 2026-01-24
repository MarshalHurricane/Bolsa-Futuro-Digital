import { bd } from "../config/Database";
import { Produto } from "../Entidade/Produto";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export class ProdutoRepository {

    async inserir(produto: Produto): Promise<Produto> {
        const query = "INSERT INTO Produto (nomeproduto, especificacao, preco, quantidade) VALUES (?, ?, ?, ?)";
        
        const [result] = await (bd as any).query(query, [
            produto.nome,
            produto.especificacao,
            produto.preco,
            produto.quantidade
        ]);

        
        produto.id = (result as ResultSetHeader).insertId;
        return produto;
    }

    async listarTodos(): Promise<Produto[]> {
        const query = "SELECT * FROM Produto";
        
        
        const [rows] = await (bd as any).query(query);
        
        return (rows as any[]).map(row => new Produto(
            row.nomeproduto, 
            row.especificacao, 
            row.preco, 
            row.quantidade, 
            row.id
        ));
    }

    async buscarPorId(id: number): Promise<Produto | null> {
        const query = "SELECT * FROM Produto WHERE id = ?";
        
        const [rows] = await (bd as any).query(query, [id]);
        const lista = rows as any[];

        if (lista.length === 0) return null;

        const row = lista[0];
        return new Produto(
            row.nomeproduto, 
            row.especificacao, 
            row.preco, 
            row.quantidade, 
            row.id
        );
    }

    async atualizar(produto: Produto): Promise<boolean> {
        const query = "UPDATE Produto SET nomeproduto = ?, especificacao = ?, preco = ?, quantidade = ? WHERE id = ?";
        
        const [result] = await (bd as any).query(query, [
            produto.nome,
            produto.especificacao,
            produto.preco,
            produto.quantidade,
            produto.id
        ]);

        return (result as ResultSetHeader).affectedRows > 0;
    }

    async deletar(id: number): Promise<boolean> {
        const query = "DELETE FROM Produto WHERE id = ?";
        
        const [result] = await (bd as any).query(query, [id]);
        
        return (result as ResultSetHeader).affectedRows > 0;
    }
}