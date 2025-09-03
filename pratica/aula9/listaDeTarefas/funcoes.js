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


export function removerTarefa() {
    
}





    