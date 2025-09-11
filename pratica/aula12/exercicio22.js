/*
    Classe Pessoa
        *classe filha Pessoa Fisica
        *classe filha Pessoa Jurídica
        *1 ou mais atributo privado utilizando #
        *1 ou mais metodo herdado da classe mãe
*/

import { Pessoa } from "./exercicio21.js"


class PessoaFisica extends Pessoa {
    #cpf
    constructor (nome, idade, endereco, contato, cpf) {
        super(nome, idade, endereco, contato)
        this.#cpf = cpf
    }
     mostrarDados() {
        console.log(`Pessoa: ${this.nome}\nIdade: ${this.idade}\nEndereco: ${this.endereco}\nContato: ${this.contato}\nCPF: ${this.cpf}. `)
        console.log('--------------------')
    } 
}

class PessoaJuridica extends Pessoa {
    #cnpj
    constructor (nome, idade, endereco, contato, cnpj) {
        super (nome, idade, endereco, contato)
        this.#cnpj = cnpj      
    }
    mostrarDados() {
        console.log(`Pessoa: ${this.nome}\nIdade: ${this.idade}\nEndereco: ${this.endereco}\nContato: ${this.contato}\nCNPJ: ${this.#cnpj}. `)
        console.log('--------------------')
    }
}

const PessoaFisica1 = new PessoaFisica ('Cicrano', 'Rua Lima', '21989086744', '14789076880')
const PessoaJuridica1 = new PessoaJuridica ('Beltrano', 'Rua Dr. Agenor', '21987685665', '79893223470')

PessoaFisica1.mostrarDados();
PessoaJuridica1.mostrarDados();