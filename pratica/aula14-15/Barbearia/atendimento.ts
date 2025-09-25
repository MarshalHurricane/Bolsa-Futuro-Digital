import { Cliente } from "./cliente";
import { Funcionario } from "./funcionario";
import { Corte } from "./corte";


export class Atendimento {
    cliente : Cliente;
    funcionario : Funcionario;
    corte: Corte;

    constructor(cliente : Cliente, funcionario: Funcionario, corte: Corte) {
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.corte = corte;
    }


        calcularValorFinal() {
            if (this.cliente.idade < 18) {
                const valorOriginal = this.corte.valorCorte;
                const valorDesconto = this.corte.valorCorte * 0.3;
                return valorOriginal - valorDesconto; 
            } else {
                return this.corte.valorCorte
            }
        }

        public exibirDetalhes(): void {
    
    
            const valorFinal = this.calcularValorFinal();

            console.log("Dados do atendimento:\n");
            console.log(`Cliente: ${this.cliente.nome}, Idade: ${this.cliente.idade}`);
            console.log(`Funcionário: ${this.funcionario.nome}, Matrícula: ${this.funcionario.matricula}`);
            console.log(`Corte: ${this.corte.nomeCorte}`);
            console.log(`Valor Final: R$ ${valorFinal.toFixed(2)}`);
            console.log("\n");
        }
}