var readlineSync = require ('readline-sync');
let produto = 1000;
let a_vista = produto - (produto * 0.15);
let dinheiro = a_vista;
let pix = a_vista;
let cartao1x = produto - (produto * 0.1);
let cartao2x = produto
let cartao3xoumais = produto + (produto * 0.1);

const formasdepagamento = ['dinheiro', 'PIX', 'cartao'];
const qtdvezes = ['A vista', '2x', '3x ou mais'];

const metodoDePagamento = readlineSync.keyInSelect(formasdepagamento, "Qual sera a forma de pagamento?");
console.log(`A forma de pagamento ${formasdepagamento[metodoDePagamento]} foi selecionada`);

if (metodoDePagamento === 0 || metodoDePagamento === 1) { // 0 for 'dinheiro', 1 for 'PIX'
  console.log(`O valor do produto será R$${a_vista}.`);
}
else if (metodoDePagamento === 2) { // 2 for 'cartao'
  console.log(`O método cartão foi selecionado. Por favor, informe a quantidade de parcelas.`);
  
  const parcelas = readlineSync.keyInSelect(qtdvezes, "Em quantas vezes será o pagamento?");
  console.log(`A forma de pagamento do cartão ${qtdvezes[parcelas]} foi selecionada.`);

  if (parcelas === 0) { // 0 for 'A vista'
    console.log(`Valor total: R$${cartao1x}.`);
  }
  else if (parcelas === 1) { // 1 for '2x'
    console.log(`O valor de cada parcela é de R$${(cartao2x / 2).toFixed(2)}. Valor total: R$${cartao2x.toFixed(2)}.`);
  }
  else if (parcelas === 2) { // 2 for '3x ou mais'
    console.log(`O valor de cada parcela é de R$${(cartao3xoumais / 3).toFixed(2)}. Valor total: R$${cartao3xoumais.toFixed(2)}.`);
  }
}