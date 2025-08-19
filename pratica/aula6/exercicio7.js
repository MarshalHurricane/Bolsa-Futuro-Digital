// 3 - Apresentar o total da soma de todos os números inteiros divisíveis por 4 que sejam menores que 200, iniciando a contagem em 1

let soma = 0
for (i = 1; i < 200; i++){
    if (i % 4 == 0)
    soma += i

}

console.log(soma)