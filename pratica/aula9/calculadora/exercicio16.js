// Exportanto essa calculadora para exercicio16_1.js

var readline = require('readline-sync');

 
function executarCalculadora() {

const primeiroNumero = parseFloat(readline.question("Insira o primeiro valor:"));

if(isNaN(primeiroNumero)){
    console.log("O valor inserido nao e um numero.");
    return;
}
console.log(primeiroNumero);
const segundoNumero = parseFloat(readline.question("Insira o segundo valor"));

if(isNaN(segundoNumero)){
    console.log("O valor inserido nao e um numero.");
    return;
}
console.log(segundoNumero);
const operador = readline.question("Insira o operador matematico.");

let resultado;
switch(operador) {
    case "+":
        resultado =  primeiroNumero + segundoNumero;
        break;
    case "-":
        resultado =  primeiroNumero - segundoNumero;
        break;
    case "*":
        resultado =  primeiroNumero * segundoNumero;
        break;
    case "/":
        resultado =  primeiroNumero / segundoNumero;
        break;
    default:
        console.log("Por favor, insira um operador valido: '+','-','*' ou '/'");
        break;                
}

if (resultado !== undefined) {
    console.log(resultado);
}


if(typeof resultado === 'number'){

    }
}

module.exports = executarCalculadora;