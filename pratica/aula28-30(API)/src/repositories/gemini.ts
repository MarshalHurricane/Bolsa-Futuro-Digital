// src/repositories/Produto.repository.ts
import { bd } from "../config/Database";
import { Produto } from "../entidade/Produto";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export class ProdutoRepository {

    async InserirNoBd(produto: Produto): Promise<number> {
        const [result] = await bd.execute<ResultSetHeader>(
            "INSERT INTO Produto (nomeproduto, preco) VALUES (?, ?)",
            [produto.NomeProduto, produto.Preco] // Correção da sintaxe
        );
        return result.insertId;
    }

    // MÉTODO GET COM PARÂMETRO
    async BuscarPorId(id: number): Promise<Produto | null> {
        const [rows] = await bd.execute<RowDataPacket[]>(
            "SELECT id, nomeproduto, preco FROM Produto WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return null;
        }

        const row = rows[0];
        return new Produto(row.nomeproduto, row.preco, row.id);
    }

    // MÉTODO UPDATE
    async AtualizarNoBd(produto: Produto): Promise<boolean> {
        const [result] = await bd.execute<ResultSetHeader>(
            "UPDATE Produto SET nomeproduto = ?, preco = ? WHERE id = ?",
            [produto.NomeProduto, produto.Preco, produto.id]
        );
        return result.affectedRows > 0;
    }

    // MÉTODO DELETE
    async DeletarNoBd(id: number): Promise<boolean> {
        const [result] = await bd.execute<ResultSetHeader>(
            "DELETE FROM Produto WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0;
    }
}