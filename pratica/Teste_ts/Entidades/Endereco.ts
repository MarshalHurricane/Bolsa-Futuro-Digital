import { Pessoa } from "./Pessoa"; 

export class Endereco{
    Cep: string;
    Estado: string;
    Cidade: string;
    Bairro: string;
    Rua: string;
    Pessoas: Pessoa[];

    constructor(cep: string, estado: string, cidade: string, bairro: string, rua: string,  pessoas: Pessoa[] = []){
        this.Cep = cep,
        this.Estado = estado,
        this.Cidade = cidade,
        this.Bairro = bairro,
        this.Rua = rua,
        this.Pessoas = pessoas
    }

}