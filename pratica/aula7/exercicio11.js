/* Crie um array produtos com objetos que têm nome e preço.
    Use for para descobri qual o produto tem o maior preço.
 */

let produtos = [
    {nome: "lápis", preco: 3},
    {nome: "caderno", preco: 8},
    {nome: "estojo", preco: 6.5},
    {nome: "caneta", preco: 4}
 ]

 let produtoMaisCaro = produtos[0];
 let maiorPreco = produtos[0].preco;


for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].preco > maiorPreco) {
        maiorPreco = produtos[i].preco;
        produtoMaisCaro = produtos[i];
    }
}

console.log(`O produto mais caro da lista é ${produtoMaisCaro.nome} e custa R$${maiorPreco.toFixed(2)}.`)