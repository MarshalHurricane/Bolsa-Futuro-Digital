// leia o valor do produto e determine o valor que deve ser pago conforme a escolha da forma de pagamento
// imprima na tela o valor final do produto a ser pago
// 1 a vista em dinheiro ou pix recebe 15% de desconto
// a vista no cartao de credito 10% de desconto
// parcelado no cartao em 2x preço normal sem juros
// parcelado 3x ou mais preço do produto mais juros de 10%

// let readlineSync = require("readline-sync");
// let formadepagamento = readlineSync.question("Olá, cliente! Qual será a forma de pagamento?");


var readlineSync = require ('readline-sync');
let produto = 334;
let a_vista = produto - (produto * 0.15);
let dinheiro = a_vista;
let pix = a_vista;
let cartao1x = produto - (produto * 0.1);
let cartao2x = produto
let cartao3xoumais = produto + (produto * 0.1);
const formasdepagamento = ['"dinheiro"', '"PIX"', '"cartao"'];
const qtdvezes = ['A vista', '2x', '3x ou mais'];



let index = readlineSync.keyInSelect(formasdepagamento, "Qual sera a forma de pagamento?");
console.log(`A forma de pagamento ${formasdepagamento[index]} foi selecionada.`); 


if (index === 0 || index === 1 ){
    console.log(`O valor do produto será R$${a_vista}.`);
}

else if (index === 2){
    console.log(`O método cartão foi selecionado. Por favor, informe a quantidade de parcelas no pagamento com cartão.`);
    index = readlineSync.keyInSelect(qtdvezes, "Em quantas vezes sera o pagamento?")
    console.log(`A forma de pagamento do cartão "${qtdvezes[index]}" foi selecionado.`)

    if (index === 0){
    console.log(`Valor total: R$${(cartao1x).toFixed(2)}.`);
}
    else if (index === 1){
    console.log(`Método de compra em 2x selecionado. Valor de cada parcela: R$${(cartao2x / 2).toFixed(2)} Valor total: R$${cartao2x}.`);    
}
    else if (index === 2){
    console.log(`Método de compra em 3x ou mais selecionado. Valor de cada parcela R${(cartao3xoumais / 3).toFixed(2)} Valor total: R$${cartao3xoumais}.`);
}

}




