const tarefas = [];


export function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
  console.log(`Tarefa "${tarefa}" adicionada.`);
}


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

export function removerTarefa(indice) {

  const indiceReal = indice - 1; 

  if (indiceReal >= 0 && indiceReal < tarefas.length) {
    const tarefaRemovida = tarefas.splice(indiceReal, 1);
    console.log(`Tarefa "${tarefaRemovida[0]}" removida.`);
  } else {
    console.log("Índice de tarefa inválido.");
  }
}