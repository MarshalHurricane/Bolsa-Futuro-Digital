/*
    2 - Você tem um array de objetos representando produtos com nome e preço. 
    Use ForEach para imprimir "o produto NOME custa PREÇO reais" apenas se o preço for maior que 10.
*/

let produtos = [
    {nome: "caderno", preco: 28},
    {nome: "apontador", preco: 3},
    {nome: "lapiseira", preco: 7.5},
    {nome: "fichario", preco: 40}
]


produtos.forEach(function(caros) {
    if (caros.preco > 10)
        console.log(`O produto ${caros.nome} custa R$${caros.preco}.`)
})


