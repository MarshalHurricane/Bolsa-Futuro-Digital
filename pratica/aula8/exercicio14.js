/*
    3 - Você tem um array de números. Crie uma função que verifica se um numero é par e  imprime "NUMERO é par". 
    Use essa função dentro de forEach
*/

let conjuntoNumerico = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 111, 123, 126]

function numeroPar() {
    conjuntoNumerico.forEach(function(elementos) {
        if (elementos % 2 == 0) {
            console.log(`${elementos} e par.`)
        }
    })
}


numeroPar()


/*
    exemplo utilizando "For elementos of array":

let conjuntoNumerico = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 111, 123, 126]

function numeroPar() {
    for (numeros of conjuntoNumerico) 
        if (numeros % 2 == 0) {
            console.log(`${numeros} e par.`)
        }

}

numeroPar(conjuntoNumerico)

*/