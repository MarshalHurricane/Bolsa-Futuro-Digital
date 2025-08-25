/* Crie um array chamado alunos com 3 objetos, cada um com nome e nota,
 percorra com for e calcule a média das notas de cada aluno.
 */

let alunos = [
    {nome: "joao", idade:32, nota:[9,9.5,8.5]},
    {nome: "maria", idade: 29, nota:[8,9,10]},
    {nome: "jose", idade: 31, nota:[8,7,8]}]


for (let i = 0; i < alunos.length; i++) {
    let alunoAtual = alunos[i];

    let somaDasNotas = 0

    for (let indiceNota = 0; indiceNota < alunoAtual.nota.length; indiceNota++){
    somaDasNotas += alunoAtual.nota[indiceNota];
}

let media = somaDasNotas / alunoAtual.nota.length
console.log(`A média das notas de ${alunoAtual.nome} é: ${media.toFixed(2)}`);

}