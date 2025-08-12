// leia o valor do produto e determine o valor que deve ser pago conforme a escolha da forma de pagamento
// imprima na tela o valor final do produto a ser pago
// 1 a vista em dinheiro ou pix recebe 15% de desconto
// a vista no cartao de credito 10% de desconto
// parcelado no cartao em 2x preço normal sem juros
// parcelado 3x ou mais preço do produto mais juros de 10%

// let readlineSync = require("readline-sync");
// let formadepagamento = readlineSync.question("Olá, cliente! Qual será a forma de pagamento?");


var readlineSync = require ('readline-sync');
let produto = 400
let a_vista = produto - (produto * 0.15);
let dinheiro = a_vista;
let pix = a_vista;
let cartao1x = produto - (produto * 0.1);
let cartao2x = produto
let cartao3xoumais = produto + (produto * 0.1);
let cartao4x = cartao3xoumais
let cartao5x = cartao3xoumais
const formasdepagamento = ['"dinheiro"', '"PIX"', '"cartao"'];
const qtdvezes = ['A vista', '2x', '3x', '4x', '5x'];
// Limite de 5x no cartão sugerido no exercício



let index = readlineSync.keyInSelect(formasdepagamento, "Qual sera a forma de pagamento?");
console.log(`A forma de pagamento ${formasdepagamento[index]} foi selecionada.`); 


if (index === 0 || index === 1 ){
    console.log(`O valor do produto será R$${a_vista}.`);
}

else if (index === 2){
    console.log(`O método cartão foi selecionado. Por favor, informe a quantidade de parcelas no pagamento com cartão (Máx de 5x)`);
    qtdparcelas = readlineSync.keyInSelect(qtdvezes, "Em quantas vezes sera o pagamento?")
    console.log(`A forma de pagamento do cartão "${qtdvezes[qtdparcelas]}" foi selecionado.`)
}
    if (qtdparcelas === 0){
    console.log(`Valor total: R$${(cartao1x).toFixed(2)}.`);
}
    else if (qtdparcelas === 1){
    console.log(`Método de compra em 2x selecionado: Valor de cada parcela: R$${(cartao2x / 2).toFixed(2)}. Valor total: R$${(cartao2x).toFixed(2)}.`);    
}
    else if (qtdparcelas === 2){
    console.log(`Método de compra em 3x selecionado: Valor de cada parcela R$${(cartao3xoumais / 3).toFixed(2)}. Valor total: R$${(cartao3xoumais).toFixed(2)}.`);
}
    else if (qtdparcelas === 3){
    console.log(`Método de compra em 4x selecionado: Valor de cada parcela R$${(cartao4x / 4).toFixed(2)}. Valor total: R$${(cartao4x).toFixed(2)}.`);
}
    else if (qtdparcelas === 4){
    console.log(`Método de compra em 5x selecionado: Valor de cada parcela R$${(cartao5x / 5).toFixed(2)}. Valor total: R$${(cartao5x).toFixed(2)}.`);

}
