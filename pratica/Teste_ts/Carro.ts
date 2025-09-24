class Carro {
  modelo! : string 
  cor?: string;
  marca?: string;
  anolancamento?: Date;
  velocidade: number = 0;

  Apresentar(){
    return `${this.modelo} com a marca ${this.marca} com as seguintes características: cor: ${this.cor}, Ano de lançamento: ${this.anolancamento};` 
  }

  Acelerar(velocidade: number){
    this.velocidade += velocidade;
    return `${this.modelo} acelerou em ${this.velocidade} km/h.;`
  }

  Frear(valor: number){
    this.velocidade -= valor;
    return `${this.modelo} reduziu para ${this.velocidade} km/h.;`
  }

  MostrarVelocidade(){
    return `Velocidade atual do ${this.modelo}: ${this.velocidade} km/h; `
  }
}


const carro1 = new Carro();
carro1.modelo = "uno";
carro1.marca = "fiat";
carro1.cor = "verde";
carro1.anolancamento = new Date("2010-05-11T00:00:00")

console.log(carro1.Apresentar());
console.log(carro1.Acelerar(30));
console.log(carro1.Frear(20));
console.log(carro1.MostrarVelocidade());