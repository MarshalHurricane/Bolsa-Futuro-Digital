import { Cliente } from "./cliente";
import { Funcionario } from "./funcionario";
import { Corte } from "./corte";

class Barbearia {
    cliente : Cliente [] = [];
    funcionario : Funcionario [] = [];
    corte : Corte [] = [];

    constructor (cliente: Cliente[], funcionario: Funcionario[], corte: Corte[]) {
        this.cliente = cliente;
        this. funcionario = funcionario;
        this.corte = corte;
    }

    

}