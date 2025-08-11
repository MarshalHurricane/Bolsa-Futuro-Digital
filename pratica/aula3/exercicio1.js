// Todos vão receber acréscimos de 3%, então fica (x + (x * 0.03)).
// Igual ou inferior à R$1050,00 recebe mais R$200,00.

let salario = 1000
const reajuste1 = salario + (salario * 0.03)
const abono = 200
const reajuste2 = reajuste1 + abono

if (salario > 1050) {

    console.log(`Novo salário reajustado: ${reajuste1}`)

} else {
    console.log(`Novo salário reajustado com abono de R$200,00: R$ ${reajuste2.toFixed(2)}`)
}
