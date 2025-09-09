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
        return `O carro ${this.modelo} acelerou: Velocidade atual de ${this.velocidade}km/h.`
        
    }
    frear(valor) {
        this.velocidade -= valor
        if (this.velocidade < 0) {
            this.velocidade = 0
            return `O carro ${this.modelo} freiou. Velocidade atual de ${this.velocidade}km/h.`
        }
        return `O carro ${this.modelo} freiou. Velocidade atual de: ${this.velocidade}km/h.`
        
    }
    mostrarVelocidade() {
        console.log(`A velocidade do carro esta em ${this.velocidade}km/h.`)
        
    }
    mostrarVelocidadeFinal() {
        console.log(`A velocidade final do carro ${this.modelo} ficou em ${this.velocidade}km/h.`)
    }
}

const carro1 = new Carro ("Bugatti","Chiron","vermelho","2016",350)
const carro2 = new Carro ("Ferrari","SF90Stradale","preto","2019",340)

carro1.Apresentar()
console.log(carro1.frear(30))
console.log(carro1.acelerar(10))
console.log(carro1.acelerar(5))
console.log(carro1.mostrarVelocidade())

carro2.Apresentar()
console.log(carro2.acelerar(20))
console.log(carro2.frear(300))
console.log(carro2.frear(70))
console.log(carro2.acelerar(5))
console.log(carro2.mostrarVelocidade())




