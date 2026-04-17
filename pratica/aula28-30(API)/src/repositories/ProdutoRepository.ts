import { bd } from "../config/Database";
import { Produto } from "../entidade/Produto";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export class ProdutoRepository {

    async InserirNoBd(produto: Produto): Promise<number> {
        const query = "INSERT INTO Produto (nomeproduto, especificacao, preco, quantidade) VALUES (?, ?, ?, ?)";
        const [result] = await bd.execute<ResultSetHeader>(query, [
            produto.NomeProduto,
            produto.especificacao,
            produto.Preco,
            produto.quantidade
        ]);
        return result.insertId;
    }

    async ListarTodos(): Promise<Produto[]> {
        const query = "SELECT * FROM Produto";
        const [rows] = await bd.execute<RowDataPacket[]>(query);
        
        return rows.map(row => new Produto(
            row.nomeproduto, 
            row.preco, 
            row.id,
            row.especificacao, 
            row.quantidade     
        ));
    }

    async BuscarPorId(id: number): Promise<Produto | null> {
        const query = "SELECT * FROM Produto WHERE id = ?";
        const [rows] = await bd.execute<RowDataPacket[]>(query, [id]);

        if (rows.length === 0) return null;

        const row = rows[0];
        return new Produto(row.nomeproduto, row.preco, row.id, row.especificacao, row.quantidade);
    }

    async AtualizarNoBd(produto: Produto): Promise<boolean> {
        const query = "UPDATE Produto SET nomeproduto = ?, especificacao = ?, preco = ?, quantidade = ? WHERE id = ?";
        const [result] = await bd.execute<ResultSetHeader>(query, [
            produto.NomeProduto, 
            produto.especificacao,
            produto.Preco, 
            produto.quantidade,
            produto.id
        ]);
        return result.affectedRows > 0;
    }

    async DeletarNoBd(id: number): Promise<boolean> {
        const [result] = await bd.execute<ResultSetHeader>(
            "DELETE FROM Produto WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0;
    }
}