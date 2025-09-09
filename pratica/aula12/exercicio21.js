/*
    Classe Pessoa
        *classe filha Pessoa Fisica
        *classe filha Pessoa Jurídica
        *1 ou mais atributo privado utilizando #
        *1 ou mais metodo herdado da classe mãe
*/
    

export class Pessoa {
    #endereco
    #contato
    constructor (nome, idade, endereço, contato, cpf, cnpj) {
        this.nome = nome;
        this.idade = idade;
        this.#endereco = endereço;
        this.#contato = contato;
        this.cpf = cpf;
        this.cnpj = cnpj;
    }

    mostrarDados() {
        console.log(`Pessoa: ${this.nome}\nIdade: ${this.idade}\nEndereco: ${this.#endereco}\nContato: ${this.#contato}`)
    } 
}

const Pessoa1 = new Pessoa ("fulano", "30", "Rua Andorinha", 21976694332, 17456782450, 546348925639)

Pessoa1.mostrarDados();