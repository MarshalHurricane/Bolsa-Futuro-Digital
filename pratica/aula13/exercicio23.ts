class ContaBancaria {
    nome:string;
    banco:number;
    conta:string;
    saldo:number;
    
    constructor (nome:string, banco:number, conta:string, saldo:number) {
        this.nome = nome;
        this.banco = banco;
        this.conta = conta;
        this.saldo = saldo;

    }

    consultarSaldo () {
        console.log(`Ola, ${this.nome}. Seu saldo e de ${this.saldo}.`)
        this.tarifaConsulta()
        console.log(`Tarifa na consulta`)
    }

    debitarSaldo(valor:number) {
        const debito:number
        const resultDebito = this.saldo -= valor
        console.log(`Valor debitado: ${valor}. Saldo restante: ${resultDebito}.`)
    }

    juros(valor:number) {
        const juros:number;
        const resultJuros = 
 
    }

    tarifaConsulta (tarifaCons:number) {
        const tarifa:number;
        const resultTarifa = this.saldo -= tarifaCons;
        console.log(`Valor de ${tarifaCons} debitado por utilizacao de consulta.`);


        }

}

const cliente1 = new ContaBancaria (joao,4364,"10927309173", 3000);
const cliente2 = new ContaBancaria ();
const cliente3 = new ContaBancaria ();

cliente1.consultarSaldo();