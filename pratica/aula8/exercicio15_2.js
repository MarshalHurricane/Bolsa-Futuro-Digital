const vendasLoja = [
    {produto: "nutela140g", quantidade: 30, precoUnitario: 12.99},
    {produto: "ouroBranco1kg", quantidade: 45, precoUnitario: 54.99},
    {produto: "paçoquita750g", quantidade: 33, precoUnitario: 22.99},
    {produto: "7belo500g", quantidade: 71, precoUnitario: 11.99},
    {produto: "finiTubes180g", quantidade: 88, precoUnitario: 8.99}
];

// Função para calcular o total de uma venda
function calcularTotal(venda) {
    return venda.quantidade * venda.precoUnitario;
}

// Função para percorrer as vendas e imprimir os totais
function imprimirRelatorioVendas(vendas) {
    let totalGeral = 0;

    vendas.forEach(venda => {
        const totalVenda = calcularTotal(venda);
        totalGeral += totalVenda;
        console.log(`${venda.produto} vendeu ${totalVenda.toFixed(2)} reais`);
    });

    console.log(`Total vendido na loja: ${totalGeral.toFixed(2)} reais`);
}

// Chamada da função
console.log(imprimirRelatorioVendas(vendasLoja))

