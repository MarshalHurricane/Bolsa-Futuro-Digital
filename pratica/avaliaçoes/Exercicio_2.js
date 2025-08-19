/*
Crie um algoritmo para calcular o bônus anual de um funcionário com base em seu tempo de serviço e desempenho. 
O programa deve solicitar o salário anual, o tempo de serviço em anos e a pontuação de desempenho (de 1 a 10).
O cálculo do bônus deve seguir as regras abaixo:

Bônus Base por Tempo de Serviço:
Até 2 anos: 5% do salário anual.
entre 3 a 5 anos: 10% do salário anual.
Mais de 5 anos: 15% do salário anual.

Aumento do Bônus por Pontuação de Desempenho:
1 a 4: Sem alteração no bônus base.
entre 5 a 7: Bônus base é aumentado em 20%.
entre 8 a 10: Bônus base é aumentado em 50%.

O programa deve exibir o valor total do bônus a ser recebido pelo funcionário.
*/

var readlineSync = require ("readline-sync");
let salario_anual = parseFloat(readlineSync.question("Insira o valor do seu salario anual:"));
let tempo_serviço = Number(readlineSync.question("Insira o seu tempo de servico em anos (digite 1 caso tenha menos de 1 ano de empresa):"));
let pontuaçao_desempenho = Number(readlineSync.question("Insira sua pontuacao de desempenho de 1 a 10:"));

if (isNaN(salario_anual)){
    console.log("Insira um valor valido");
    return;
}

if (isNaN(tempo_serviço)){
    console.log("Insira um valor valido");
    return;
}

if (isNaN(pontuaçao_desempenho) || pontuaçao_desempenho < 0 || pontuaçao_desempenho > 10){
    console.log("Insira um valor valido");
    return;
}


if (tempo_serviço <= 2) {
    if  (pontuaçao_desempenho <= 4) {
        console.log(`Valor total do bonus a ser recebido: ${(salario_anual * 0.05).toFixed(2)}. Bônus Base por Tempo de Serviço: 5%. Sem bonus de Pontuaçao de Desempenho.`)
    } else if (pontuaçao_desempenho >= 5 && pontuaçao_desempenho <= 7) {
            console.log(`Valor total do bonus a ser recebido: ${((salario_anual * 0.05) + (salario_anual * 0.05 * 0.2)).toFixed(2)}. Bônus Base por Tempo de Serviço: 5%. Bônus por Pontuação de Desempenho: 20%.`)
    } else if (pontuaçao_desempenho >= 8 && pontuaçao_desempenho <= 10) {
            console.log(`Valor total do bonus a ser recebido: ${((salario_anual * 0.05) + (salario_anual * 0.05 * 0.5)).toFixed(2)}. Bônus Base por Tempo de Serviço: 5%. Bônus por Pontuação de Desempenho: 50%.`)
    }

} else if (tempo_serviço >= 3 && tempo_serviço <= 5) {
    if  (pontuaçao_desempenho <= 4) {
        console.log(`Valor total do bonus a ser recebido: ${(salario_anual * 0.1).toFixed(2)}. Bônus Base por Tempo de Serviço: 10%. Sem bonus de Pontuaçao de desempenho.`)
    } else if (pontuaçao_desempenho >= 5 && pontuaçao_desempenho <= 7) {
            console.log(`Valor total do bonus a ser recebido: ${((salario_anual * 0.1) + (salario_anual * 0.1 * 0.2)).toFixed(2)}. Bônus Base por Tempo de Serviço: 10%. Bônus por Pontuação de Desempenho: 20%.`)
    } else if (pontuaçao_desempenho >= 8 && pontuaçao_desempenho <= 10) {
            console.log(`Valor total do bonus a ser recebido: ${((salario_anual * 0.1) + (salario_anual * 0.1 * 0.5)).toFixed(2)}. Bônus Base por Tempo de Serviço: 10%. Bônus por Pontuação de Desempenho: 50%.`)
    } 

} else {
    if  (pontuaçao_desempenho <= 4) {
        console.log(`Valor total do bonus a ser recebido: ${(salario_anual * 0.15).toFixed(2)}. Bônus Base por Tempo de Serviço: 15%. Sem bonus de Pontuaçao de desempenho.`)
    } else if (pontuaçao_desempenho >= 5 && pontuaçao_desempenho <= 7) {
            console.log(`Valor total do bonus a ser recebido: ${((salario_anual * 0.15) + (salario_anual * 0.15 * 0.2)).toFixed(2)}. Bônus Base por Tempo de Serviço: 15%. Bônus por Pontuação de Desempenho: 20%.`)
    } else if (pontuaçao_desempenho >= 8 && pontuaçao_desempenho <= 10) {
            console.log(`Valor total do bonus a ser recebido: ${((salario_anual * 0.15) + (salario_anual * 0.15 * 0.5)).toFixed(2)}. Bônus Base por Tempo de Serviço: 15%. Bônus por Pontuação de Desempenho: 50%.`)
    }
}

    
    

/*let tempoDeServiço = ["Até 2 anos", "Entre 3 a 5 anos", "Mais de 5 anos"]
let seleçao_tds = readlineSync.keyInSelect(tempoDeServiço, "Selecione seu tempo de serviço:")

switch("Até 2 anos"){
    case 0:
        
    case 1:
        console.log(``)
    case 2:
        console.log(``)
    case 3:
        console.log(``)
}
*/