const vendasLoja = [
    {produto: "nutela140g", quantidade: 30, precoUnitario: 12.99},
    {produto: "ouroBranco1kg", quantidade: 45, precoUnitario: 54.99},
    {produto: "paçoquita750g", quantidade: 33, precoUnitario: 22.99},
    {produto: "7belo500g", quantidade: 71, precoUnitario: 11.99},
    {produto: "finiTubes180g", quantidade: 88, precoUnitario: 8.99}
]

function totalVendas() {
    vendasLoja.quantidade * vendasLoja.precoUnitario
}

console.log(totalVendas(vendasLoja))