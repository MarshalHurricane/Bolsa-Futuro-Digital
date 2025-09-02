// arquivo: app.js
import readline from 'readline-sync';

import { adicionarTarefa, listarTarefas, removerTarefa } from './exercicio17ex.js';

function exibirMenu() {
  console.log("\n--- Gerenciador de Tarefas ---");
  console.log("1. Adicionar Tarefa");
  console.log("2. Listar Tarefas");
  console.log("3. Remover Tarefa");
  console.log("4. Sair");
  console.log("------------------------------");
}

function executar() {
  let continuar = true;

  while (continuar) {
    exibirMenu();
    const opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {
      case '1':
        const novaTarefa = readline.question("Qual tarefa deseja adicionar? ");
        adicionarTarefa(novaTarefa);
        break;
      case '2':
        listarTarefas();
        break;
      case '3':
        const indiceParaRemover = readline.question("Qual o numero da tarefa que deseja remover? ");
        // Converte a entrada para um número inteiro
        removerTarefa(Number(indiceParaRemover));
        break;
      case '4':
        console.log("Saindo do gerenciador de tarefas");
        continuar = false;
        break;
      default:
        console.log("Opcao invalida. Por favor, escolha um numero entre 1 e 4.");
        break;
    }
  }
}

executar();