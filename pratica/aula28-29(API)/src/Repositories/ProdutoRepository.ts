import { bd } from "../config/Database";
import { Produto } from "./Produto"


export class ProdutoRepository{

async InserirNoBd(produto : Produto) : Promise<t> {
    try {
        await bd.execute(
            "insert into Produto(nomeproduto, preco) valuer (?, ?)"),
            [produto, produto.Preco]
        } catch(error: unknown) {
            console.log(error)

        }
    }

}