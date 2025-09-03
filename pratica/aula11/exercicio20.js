import readline from "readline-sync"


class Carro {
    constructor (modelo,marca,cor,anoLancamento,velocidade) {

    this.modelo = modelo
    this.marca = marca
    this.cor = cor
    this.anoLancamento = anoLancamento
    this.velocidade = velocidade
}
    Apresentar() {

        console.log(`O carro ${this.modelo}, da marca ${this.marca} e da cor ${this.cor}, ano ${this.anoLancamento}, chegou a ${this.velocidade}km/h`)
    }
    acelerar(valor) {
        this.velocidade += valor
        return `Velocidade atual de ${this.modelo}: ${this.velocidade}.`
        
    }
    frear(valor) {
        this.velocidade -= valor
        if (this.velocidade < 0) {
            return `Velocidade atual de ${this.modelo}: ${this.velocidade}.`
        }
        return `Velocidade atual de ${this.modelo}: ${this.velocidade}.`
        
    }
    mostrarVelocidade() {
        console.log(`A velocidade total do carro ficou em ${this.velocidade}km/h.`)
        
    }
}

const carro1 = new Carro ("Bugatti","Chiron","vermelho","2016",350)
const carro2 = new Carro ("Ferrari","SF90Stradale","preto","2019",340)

carro1.Apresentar()
carro1.frear(30)
carro1.acelerar(10)
carro1.acelerar(5)
carro1.mostrarVelocidade()

carro2.Apresentar()
carro2.acelerar(20)
carro2.frear(300)
carro2.frear(70)
carro2.mostrarVelocidade()




