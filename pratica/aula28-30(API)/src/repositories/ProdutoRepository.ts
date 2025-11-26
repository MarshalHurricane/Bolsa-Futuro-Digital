import { bd } from "../config/Database";
import { Produto } from "./Produto"


export class ProdutoRepository{

async InserirNoBd(produto : Produto) : Promise<number> {
    try {
        await bd.execute(
            "insert into Produto (nomeproduto, preco) values (?, ?)"),
            [produto.NomeDoProduto, produto.Preco]
        } catch(error: unknown) {
            console.log(error)

        }
    }

}