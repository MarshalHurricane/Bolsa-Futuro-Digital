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
        this.tarifaConsulta(5)
        console.log(`Tarifa na consulta aplicada.`)
    }

    debitarSaldo(valor:number) {
        const resultDebito = this.saldo -= valor
        console.log(`Valor debitado: ${valor}. Saldo restante: ${resultDebito}.`)
    }

    juros(porcentagemjuros:number) {
        let resultJuros: any
        resultJuros = this.saldo * porcentagemjuros
        console.log(`Atraso no pagamento. Valor debitado: ${this.debitarSaldo} + ${resultJuros}.\n
             Total = ${resultJuros}`)


 
    }

    tarifaConsulta (tarifaCons:number) {
        const resultTarifa = this.saldo -= tarifaCons;
        console.log(`Valor de ${tarifaCons} debitado por utilizacao de consulta.`);


    }

}

const cliente1 = new ContaBancaria ("joao",4364,"10927309173", 3000);
const cliente2 = new ContaBancaria ("maria", 2341, "23154123458", 6500);
const cliente3 = new ContaBancaria ("jose", 4245, "49174938449", 40000);

cliente1.consultarSaldo();