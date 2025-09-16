var readlineSync = require("readline-sync");

// Coleta as informações do usuário
let salario_anual = parseFloat(readlineSync.question("Insira o valor do seu salario anual: "));
let tempo_servico = Number(readlineSync.question("Insira o seu tempo de servico em anos: "));
let pontuacao_desempenho = Number(readlineSync.question("Insira sua pontuacao de desempenho de 1 a 10: "));

// Função para validar as entradas
function validarEntradas(salario, tempo, pontuacao) {
    if (isNaN(salario) || salario <= 0) {
        console.log("Por favor, insira um valor de salário anual válido e positivo.");
        return false;
    }
    if (isNaN(tempo) || tempo < 0) {
        console.log("Por favor, insira um tempo de serviço válido.");
        return false;
    }
    if (isNaN(pontuacao) || pontuacao < 1 || pontuacao > 10) {
        console.log("Por favor, insira uma pontuação de desempenho válida entre 1 e 10.");
        return false;
    }
    return true;
}

if (!validarEntradas(salario_anual, tempo_servico, pontuacao_desempenho)) {
    return;
}

// 1. Determina o bônus base com base no tempo de serviço
let bonus_base_porcentagem;
if (tempo_servico <= 2) {
    bonus_base_porcentagem = 0.05; // 5%
} else if (tempo_servico >= 3 && tempo_servico <= 5) {
    bonus_base_porcentagem = 0.10; // 10%
} else {
    bonus_base_porcentagem = 0.15; // 15%
}

// 2. Determina o multiplicador de desempenho
let multiplicador_desempenho = 0;
let mensagem_desempenho;

if (pontuacao_desempenho >= 8) {
    multiplicador_desempenho = 0.50; // 50%
    mensagem_desempenho = "50%";
} else if (pontuacao_desempenho >= 5) {
    multiplicador_desempenho = 0.20; // 20%
    mensagem_desempenho = "20%";
} else {
    multiplicador_desempenho = 0;
    mensagem_desempenho = "Sem";
}

// 3. Calcula o valor final do bônus
let valor_bonus_base = salario_anual * bonus_base_porcentagem;
let valor_bonus_adicional = valor_bonus_base * multiplicador_desempenho;
let valor_total_bonus = valor_bonus_base + valor_bonus_adicional;

// 4. Exibe o resultado de forma clara
console.log(`\n--- Resumo do Bônus ---`);
console.log(`Bônus Base por Tempo de Serviço: ${(bonus_base_porcentagem * 100).toFixed(0)}%`);
console.log(`Bônus por Pontuação de Desempenho: ${mensagem_desempenho}`);
console.log(`Valor total do bônus a ser recebido: R$ ${valor_total_bonus.toFixed(2)}`);