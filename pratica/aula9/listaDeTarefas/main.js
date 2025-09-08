import readline from 'readline-sync'
import * as funcoes from './funcoes.js';
import { adicionarTarefa, mostrarTarefas, removerTarefa } from './funcoes.js';



function mostrarMenu() {
    console.log('\n-----Menu de Opcoes-----');
    console.log('1 - Adicionar tarefas');
    console.log('2 - Listar tarefas');
    console.log('3 - Remover tarefa');
    console.log('4 - Sair');
    console.log('-------------------------');
}

let continuar = true

while (continuar) {
    mostrarMenu();
    const opcao = readline.question('Escolha uma opcao: ');

    switch (opcao) {
        case '1':
            const novaTarefa = readline.question('Qual tarefa deseja adicionar? ');
            adicionarTarefa(novaTarefa);
            break;
        case '2':
            mostrarTarefas();
            break;
        case '3':
            const indiceParaRemover = readline.question('Digite o numero da tarefa a ser removida: ');
        removerTarefa(Number(indiceParaRemover));
            break;
        case '4':
            console.log('Saindo do programa.');
            continuar = false
            break;
        default:
            console.log('Opcao invalida. Por favor, escolha um numero de 1 a 4. ');
            break;

    }

}



