<<<<<<< HEAD
/*
Você tem um array de objetos representando vendas de uma vendasLoja. Cada objeto possui produto, quantidade e precoUnitario.Cada
    Crie uma função que calcula o total de uma venda (quantidade * precoUnitario). 
    Crie uma função que percorre o array usando forEach e imprime:
    * "PRODUTO vendeu TOTAL reais" para cada venda
    * Ao final, imprime "TOtal vendido na loja: TOTAL_GERAL reais"
*/

=======
>>>>>>> ab3a6e7e1ef0496662e20c867ad0913788562145
const vendasLoja = [
    {produto: "nutela140g", quantidade: 30, precoUnitario: 12.99},
    {produto: "ouroBranco1kg", quantidade: 45, precoUnitario: 54.99},
    {produto: "paçoquita750g", quantidade: 33, precoUnitario: 22.99},
    {produto: "7belo500g", quantidade: 71, precoUnitario: 11.99},
    {produto: "finiTubes180g", quantidade: 88, precoUnitario: 8.99}
]

<<<<<<< HEAD


function totalVendas(vendas) {
     return totalProduto = vendas.quantidade * vendas.precoUnitario;
    
}
    
function relatorioVendas() {
    
    let totalGeral
    vendasLoja.forEach(function(elemento) {
    console.log(`${vendasLoja.produto} vendeu ${totalVendas}`);
    })

    let totalGeral = totalProduto * vendasLoja.length;

    console.log(`Total vendido na loja: ${totalGeral}`);

}

vendasLoja.forEach (totalVendas)
relatorioVendas()
=======
function totalVendas() {
    for (let i = 0; i < vendasLoja.length; i++) {
        console.log(vendasLoja[i].quantidade * vendasLoja[i].precoUnitario)
    }
    
}

console.log(totalVendas(vendasLoja))
>>>>>>> ab3a6e7e1ef0496662e20c867ad0913788562145
