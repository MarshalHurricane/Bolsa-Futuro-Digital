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
    console.log("\n Lista de produtos disponiveis: \n")
    for (let i = 0; i < produtos.length; i++) {
        console.log(produtos[i])
    }
}

mostrarProdutos(produtos)

//conceito de "flag" para encontrar o produto
let produtoEncontrado = false;
let indiceProduto = null

do {
let escolhaProduto = (rl.question(`\n Qual produto voce deseja? \n `)).toLowerCase()

for (let i = 0; i < produtos.length; i++) {
    if (escolhaProduto == produtos[i].nome) {
        produtoEncontrado = true;
        indiceProduto = i
        break
    }
}

if (!produtoEncontrado) {
    console.log("Por favor, insira um produto valido.")
    mostrarProdutos(produtos)
    }
} while (!produtoEncontrado)

let quantidadeProduto = Number(rl.question(`Qual a quantidade desejada? \n `))

if (quantidadeProduto <= produtos[indiceProduto].quantidade) {
    produtos[indiceProduto].quantidade -= quantidadeProduto
    let valorTotal = produtos[indiceProduto].preco * quantidadeProduto
    console.log(`O valor total da compra fica em R$${(valorTotal).toFixed(2)} \n`)
}
    else {
        console.log("Quantidade indisponivel, insira uma quantidade valida.")
    }

mostrarProdutos(produtos)

