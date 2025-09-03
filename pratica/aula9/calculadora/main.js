// Importando calculadora do funcoes.js

import readline from 'readline-sync'
import { divisao, soma } from './funcoes.js'
import { subtracao } from './funcoes.js'
import { multiplicacao } from './funcoes.js';

const main = function() {

    let primeiroNumero;
    let segundoNumero;
    let operador;

    let notValid = true;
    
    
    do {
        primeiroNumero = parseFloat(readline.question('Escolha o primeiro numero: '));

        if (isNaN(primeiroNumero)) {
            console.log('O valor inserido nao e um numero.');
            continue;
        }
        notValid = false;

    } while (notValid);

    notValid = true;


    do {

        operador = readline.question('Insira o operador matematico: ');

        if (operador != "+" && operador != "-" && operador != "*" && operador != "/") {
            console.log("Operador invalido.");
            continue;
        }
        notValid = false;

    } while (notValid);

    notValid = true;

    do {

        segundoNumero = parseFloat(readline.question('Escolha o segundo numero: '));

        if (isNaN(segundoNumero)) {
            console.log('O valor inserido nao e um numero.');
            continue;
        }
        notValid = false;

    } while (notValid);

    notValid = true;

    let resultado

    switch(operador) {
        case "+":
            resultado = soma(primeiroNumero, segundoNumero);
            break;
        case "-":
            resultado = subtracao(primeiroNumero, segundoNumero);
            break;
        case "*": 
            resultado = multiplicacao(primeiroNumero, segundoNumero);
            break;
        case "/":
            resultado = divisao(primeiroNumero, segundoNumero);
            break;
        default:
            console.log('Operador invalido');
            return;
    }

    if (resultado === false) {
        return;
    }

    console.log(`${primeiroNumero} ${operador} ${segundoNumero} = ${resultado}`);

}
    
main();
    




