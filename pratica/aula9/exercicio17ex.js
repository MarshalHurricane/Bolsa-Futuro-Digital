// arquivo: gerenciadorTarefas.js

// Array para armazenar as tarefas
const tarefas = [];

/**
 * Adiciona uma nova tarefa ao array.
 * @param {string} tarefa - A descrição da tarefa.
 */
export function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
  console.log(`Tarefa "${tarefa}" adicionada.`);
}

/**
 * Lista todas as tarefas com seus índices.
 */
export function listarTarefas() {
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa cadastrada.");
    return;
  }
  
  console.log("\n--- Suas Tarefas ---");
  tarefas.forEach((tarefa, index) => {
    console.log(`${index + 1}. ${tarefa}`);
  });
  console.log("--------------------");
}

/**
 * Remove uma tarefa pelo seu índice.
 * @param {number} indice - O índice da tarefa a ser removida (baseado em 1).
 */
export function removerTarefa(indice) {
  // Ajusta o índice para a base do array (começando em 0)
  const indiceReal = indice - 1; 

  if (indiceReal >= 0 && indiceReal < tarefas.length) {
    const tarefaRemovida = tarefas.splice(indiceReal, 1);
    console.log(`Tarefa "${tarefaRemovida[0]}" removida.`);
  } else {
    console.log("Índice de tarefa inválido.");
  }
}