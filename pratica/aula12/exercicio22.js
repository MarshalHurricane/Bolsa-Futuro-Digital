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
        console.log(`Pessoa: ${this.nome}\nIdade: ${this.idade}\nEndereco: ${this.endereço}\nContato: ${this.contato}\nCPF: ${this.cpf}. `)
    } 
}

class PessoaJuridica extends Pessoa {
    #cnpj
    constructor (nome, idade, endereco, contato, cnpj) {
        super (nome, idade, endereco, contato)
        this.#cnpj = cnpj      
    }
    mostrarDados() {
        console.log(`Pessoa: ${this.nome}\nIdade: ${this.idade}\nEndereco: ${this.endereço}\nContato: ${this.contato}\nCNPJ: ${this.#cnpj}. `)
    }
}

const PessoaFisica1 = new PessoaFisica ('cicrano', 'Rua Lima', '21989086744', '14789076880')
const PessoaJuridica1 = new PessoaJuridica ('beltrano', 'Rua Dr. Agenor', '21987685665', '79893223470')

PessoaFisica1.mostrarDados();
PessoaJuridica1.mostrarDados();


