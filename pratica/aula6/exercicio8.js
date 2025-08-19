// 4 - Peça ao usuário um número e faça uma contagem regressiva até 0, mostrando os números no console.

var readlineSync = require("readline-sync")

let num1 = Number(readlineSync.question("Insira o numero para realizar a contagem regressiva:"));

while (num1 > 0){
    num1 -= 1
    console.log(num1)
}


    
