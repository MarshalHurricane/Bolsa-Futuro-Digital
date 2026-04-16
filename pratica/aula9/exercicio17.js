var rl = require ('readline-sync')

function listaDeTarefas() {

    let tarefas = []

    

    let tarefa = rl.keyInSelect("Escolha a funcao desejada para fazer em sua lista de tarefas:")

    let objetivo

    switch(funcao) {

    case 1:
        objetivo  = tarefas.push(rl.question("Insira a tarefa:"));
        break;
    case 2:
        console.log(tarefas);
        break;
    case 3:
        let indiceTarefa = 1
         rl.question("Escreva o indice da tarefa que deseja apagar.")
    }
}

