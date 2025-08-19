/*
Desenvolva um algoritmo que converta um valor em Reais (R$) para uma das seguintes moedas a serem escolhidas: 
Dólar Americano, Euro, Libra Esterlina
O programa deve solicitar ao usuário o valor em Reais e, em seguida, a moeda de destino. 
Considere as seguintes taxas de câmbio (valores fictícios para o exercício):
1 R$ = 0.19 USD
1 R$ = 0.18 EUR
1 R$ = 0.25 CAD (Dólar Canadense)
1 R$ = 0.15 GBP (Libra Esterlina)
O programa deve exibir o valor convertido.
*/


var readlineSync = require ('readline-sync');
let real = parseFloat(readlineSync.question("Insira o valor em reais a ser realizado a conversao:"));

if(isNaN(real)){
    console.log("O valor inserido nao e um numero.");
    return;
}

let moedas = ["USD", "EUR", "CAD", "GBP"];
let conversao = readlineSync.keyInSelect(moedas, "Selecione a moeda para realizar a conversao:");
let resultado;



switch(conversao){
    case 0:
        console.log(`O valor em dólar americano fica em ${(real * 0.19).toFixed(2)} USD`);
        break;

    case 1:
        console.log(`O valor em euro fica em ${(real * 0.18).toFixed(2)} EUR`);
        break;
    
    case 2:
        console.log(`O valor em Dolar Canadense fica em ${(real * 0.25).toFixed(2)} CAD`);
        break;

    case 3:
        console.log(`O valor em Livra Esterlina fica em ${(real * 0.15).toFixed(2)} GBP`);
        break;

}
