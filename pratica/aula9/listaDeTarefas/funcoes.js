const tarefas = []

export function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
    console.log(`'${tarefa}' adicionada.`);

}

export function mostrarTarefas() {
    if (tarefas.length === 0) {
        console.log ('Nenhuma tarefa encontrada.');
        return;
    }

    console.log("\n ---- Lista de tarefas ---- \n");
    tarefas.forEach(function(tarefa, index) {
        console.log(`${index + 1} - ${tarefa}`);
    }); 
    console.log('------------------');
}

// indice >= 0 para que não seja aceito índice negativo!!
export function removerTarefa(indiceUsuario) {
    let indiceReal = indiceUsuario - 1
    if (indiceReal >= 0 && indiceReal < tarefas.length) {
       const tarefaRemovida = tarefas.splice(indiceReal, 1);
        console.log(`Tarefa ${tarefaRemovida[0]} removida com sucesso.`)
    } else {
        console.log("O indice inserido e invalido.")
    }
}
        
      





    