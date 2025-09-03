class Carro { 
    constructor (modelo, ano, cor, preco) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
        
    }
    apresentar(){
        console.log(`O carro ${this.modelo} esta em otimo estado!`)
    }
}

const obj = new Carro("corsa", 1997, "preto", 13000);
obj.apresentar()