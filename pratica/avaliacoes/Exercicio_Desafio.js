var rl = require('readline-sync')

const produtos = [
    {nome: "caderno", preco: 28, quantidade: 15},
    {nome: "lapiseira", preco: 6, quantidade: 35},
    {nome: "borracha", preco: 3, quantidade: 30},
    {nome: "apontador", preco: 1.75, quantidade: 20},
    {nome: "cola", preco: 8, quantidade: 14},
    {nome: "tesoura", preco: 11, quantidade: 8}

]

function mostrarProdutos(produtos) {
    for (let i = 0; i < produtos.length; i++) {
        console.log(produtos[i])
    }
}

mostrarProdutos(produtos)

let escolhaProduto = (rl.question(`Qual produto voce deseja?`)).toLowerCase()

//flag para encontrar o produto
let produtoEncontrado = false;


for (let i = 0; i < produtos.length; i++) {
    if (escolhaProduto == produtos[i].nome) {
        produtoEncontrado = true;
        break
    }
}

if (!produtoEncontrado) {
    console.log("Por favor, insira um produto valido.")
    return
}
    




let quantidade = Number(rl.question(`Qual a quantidade desejada?`))



